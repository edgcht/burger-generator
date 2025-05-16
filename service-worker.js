const CACHE_NAME = 'burger-gen-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'img/burger.png',
  'img/couronne.png',
  'img/game.png',
  'img/settings.png',
  'img/player.png',
  // Ajoutez d'autres ressources à mettre en cache ici
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});