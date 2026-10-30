// Berdal Productions — service worker
// Strategy: stale-while-revalidate for static assets, network-first for HTML.
const VERSION = 'bp-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/icons/bp_logo_sm.webp',
  '/icons/favicon.ico',
  '/manifest.webmanifest',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // skip cross-origin (fonts, FA, CF)

  // HTML: network-first, fall back to cache
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match('/')))
    );
    return;
  }

  // Static: stale-while-revalidate
  e.respondWith(
    caches.match(req).then((cached) => {
      const fresh = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
