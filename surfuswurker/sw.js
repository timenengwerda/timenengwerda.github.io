this.addEventListener('install', function(event) {
    console.log('WORKER: install event in progress.');
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'index.html',
        'app.js',
        'bigimage1.jpg',
        'bigimage2.jpg',
        'bigimage3.jpg',
      ]);
    }).catch(function() {
        console.log('Snoeiharde faal');
    })
  );
});
this.addEventListener('fetch', function(event) {
    console.log(event.request);
  event.respondWith(
    caches.match(event.request)
  );
});