const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/images/icons/apple-touch-icon.png',
    '/images/icons/favicon-32x32.png',
    '/images/icons/favicon-16x16.png',
    '/fluid.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Opened cache');
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
