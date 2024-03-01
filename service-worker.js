var cacheName = "lesson-store-v1";
var cacheFiles = [
  "index.html",
  "lessons.js",
  "lesson.webmanifest",
  "images/art.jpg",
  "images/coding.jpg",
  "images/debate.jpg",
  "images/environmental.jpg",
  "images/fitness.jpg",
  "images/language.jpg",
  "images/literature.jpg",
  "images/mathematics.jpg",
  "images/robotics.jpg",
  "images/science.jpg",
  "icon-lesson-512.jpg",
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
