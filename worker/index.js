// Runs only for "/" and "/api/*" (see run_worker_first in wrangler.jsonc).
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') return contact(request, env);
    if (url.pathname === '/') return home(request, env);
    return env.ASSETS.fetch(request);
  },
};

// Norwegian browsers get /no/ on the English homepage, unless they chose English
// (bp_en cookie, set by the language link).
async function home(request, env) {
  if (request.method === 'GET' || request.method === 'HEAD') {
    const cookie = request.headers.get('Cookie') || '';
    const primary = (request.headers.get('Accept-Language') || '').split(',')[0].trim().toLowerCase();
    if (/^(nb|nn|no)(-|$)/.test(primary) && !/(?:^|;\s*)bp_en=/.test(cookie)) {
      return new Response(null, {
        status: 302,
        headers: { Location: '/no/', Vary: 'Accept-Language, Cookie', 'Cache-Control': 'private, no-store' },
      });
    }
  }
  const res = await env.ASSETS.fetch(request);
  const out = new Response(res.body, res);
  out.headers.append('Vary', 'Accept-Language, Cookie');
  return out;
}

// Contact form: needs the EMAIL send_email binding, CONTACT_TO and CONTACT_FROM.
async function contact(request, env) {
  if (request.method !== 'POST') return json({ ok: false }, 405);

  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ ok: false }, 403);

  let form;
  try { form = await request.formData(); } catch { return json({ ok: false }, 400); }

  // honeypot: pretend success so bots learn nothing
  if (String(form.get('bot-field') || '').trim()) return json({ ok: true });

  const name = String(form.get('name') || '').trim().slice(0, 120);
  const email = String(form.get('email') || '').trim().slice(0, 200);
  const message = String(form.get('message') || '').trim().slice(0, 5000);
  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ ok: false }, 400);

  if (!env.EMAIL || !env.CONTACT_TO || !env.CONTACT_FROM) return json({ ok: false }, 503);

  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO,
      from: env.CONTACT_FROM,
      replyTo: email,
      subject: `Website message from ${name.replace(/[\r\n]+/g, ' ')}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
    });
  } catch (err) {
    console.error('contact send failed', err && err.code, err && err.message);
    return json({ ok: false }, 502);
  }
  return json({ ok: true });
}
