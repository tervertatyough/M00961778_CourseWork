var cacheName = "lesson-store-v1";
var cacheFiles = [
  "index.html",
  "lessons.js",
  "lesson.webmanifest",
  "img/art.jpg",
  "img/coding.jpg",
  "img/debate.jpg",
  "img/environmental.jpg",
  "img/fitness.jpg",
  "img/language.jpg",
  "img/literature.jpg",
  "img/mathematics.jpg",
  "img/robotics.jpg",
  "img/science.jpg",
  "img/icon-lesson-512.jpg",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] caching all files");
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      console.log("[Service Worker] fetching resource: " + e.request.url);
      return (
        r ||
        fetch(e.request).then(function (response) {
          return caches.open(cacheName).then(function (cache) {
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
