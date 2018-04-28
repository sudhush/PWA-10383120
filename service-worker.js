

var CACHENAME = 'Movie_PWA';
var cacheFiles = [
          './',
		  './index.html',
		  './js/app.js',
		  './js/movie-list-display.js',
		  './Movie-DateTime.html',
		  './js/movie-day-time.js',
		  './Book_Seats.html',
		  './js/Select-Seats.js',
          './Thank-you.html',
		  './js/jquery-2.2.3.min.js',
		  'https://college-movies.herokuapp.com/',
  		  'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js',
		  'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
		  'https://code.jquery.com/jquery-3.2.1.js',
		  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
		  './images/cover.jpg',
          './images/cover2.jpg',
          './images/cover3.jpg',
          './images/movie1.jpg',
          './images/movie2.jpg',
          './images/movie3.jpg',
          './images/movie4.jpg',
          './images/movie5.jpg',
          './images/movie6.jpg',
          './images/movie7.jpg',
          './images/movie8.jpg',
          './images/movie9.jpg',
          './images/movie10.jpg',
          './images/Ticket booking.jpg',
          './images/whiteBackGround.jpg',
          './images/Movie-Big.jpg',
          './css/elegant.css',
          './css/style.css' 
	];
	
	
// DEVELOPER

// SUDHANVA HUKKERI ===== 10383120


//	Installing the Service Worker 

self.addEventListener('install', function(event) {
		console.log('[ServiceWorker] Install event.');
		event.waitUntil(
				caches.open(CACHENAME).then(function(cache) {
						console.log('[ServiceWorker] Caching app shell...');
						cacheFiles.forEach(function (cfile) {
							cache.add(cfile).catch();
						  });
						// return cache.addAll(cacheFiles).then(function() {
						// 		self.skipWaiting();
						// });
				})
		);
});


self.addEventListener('activate', function(event) {
		console.log('[ServiceWorker] Activate event.');
		evente.waitUntil(
				caches.keys().then(function(keyList) {
						return Promise.all(keyList.map(function(key) {
								if (key !== CACHENAME) {
										console.log('[ServiceWorker] Removing old cache......', key);
										return caches.delete(key);
								}
						}));
				})
		);
		return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
		console.log('[ServiceWorker] Fetch event...', event.request.url);
		event.respondWith(
				caches.match(event.request).then(function(response) {
						if (response) {
								console.log('[ServiceWorker] Fetching from cache...');
								return response;
						}
						// else {
						// 	console.log('[ServiceWorker] Fetching from URL...');
						// 	return fetch(event.request)     //fetch from internet
						// 	  .then(function(res) {
						// 		return caches.open(CACHE_DYNAMIC_NAME)
						// 		  .then(function(cache) {
						// 			cache.put(event.request.url, res.clone());    //save the response for future
						// 			return res;   // return the fetched data
						// 		  })
						// 	  })
						// 	  .catch(function(err) {       // fallback mechanism
						// 		return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
						// 		  .then(function(cache) {
						// 			return cache.match('/index.html');
						// 		  });
						// 	  });
						//   }

							console.log('[ServiceWorker] Fetching from URL...');
						
						return fetch(event.request).catch(function(event){
								console.log('[ServiceWorker] Fetch request failed!');
						});
				})
		);
});
