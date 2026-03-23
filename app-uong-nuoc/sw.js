const CACHE_NAME = 'water-tracker-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://assets.piliapp.com/s3pxy/timer/beep2.mp3',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});