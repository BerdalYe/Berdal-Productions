// Contact form handler (Cloudflare Pages Function).
// Needs: send_email binding named EMAIL, plus plain variables CONTACT_TO (your verified
// inbox) and CONTACT_FROM (an address on your onboarded domain).
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export async function onRequestPost({ request, env }) {
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

export const onRequest = () => json({ ok: false }, 405);
