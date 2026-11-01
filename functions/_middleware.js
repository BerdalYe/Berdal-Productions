// Norwegian browsers get /no/ when they open the English homepage,
// unless they chose English (bp_en cookie, set by the language link).
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.pathname !== '/' || (request.method !== 'GET' && request.method !== 'HEAD')) return next();

  const cookie = request.headers.get('Cookie') || '';
  const primary = (request.headers.get('Accept-Language') || '').split(',')[0].trim().toLowerCase();
  const wantsNorwegian = /^(nb|nn|no)(-|$)/.test(primary);

  if (wantsNorwegian && !/(?:^|;\s*)bp_en=/.test(cookie)) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/no/', Vary: 'Accept-Language, Cookie', 'Cache-Control': 'private, no-store' },
    });
  }
  const res = await next();
  const out = new Response(res.body, res);
  out.headers.append('Vary', 'Accept-Language, Cookie');
  return out;
}
