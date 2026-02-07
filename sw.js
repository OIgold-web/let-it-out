const CACHE_NAME = "pwa-cache-v1"

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
          "index.html",
          "style.css",
          "main.js"
        ])
    })
  )
  console.log("service workers installed")
})
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(even.request)
    })
  )
})
