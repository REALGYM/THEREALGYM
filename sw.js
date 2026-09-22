self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installato');
});

self.addEventListener('fetch', (e) => {
  // Gestione standard delle richieste di rete
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
