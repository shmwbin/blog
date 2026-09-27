const CACHE_NAME = 'shm-digicareer-cache-v1';

// ইনস্টল ইভেন্ট
self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Service Worker: Installed');
});

// অ্যাক্টিভেট ইভেন্ট
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  console.log('Service Worker: Activated');
});

// ফেচ (Fetch) ইভেন্ট - অফলাইন সাপোর্ট এবং অ্যাপ ফাংশনালিটির জন্য
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
