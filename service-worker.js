
//	Installing the Service Worker 
self.addEventListener('install', function(event) { 
	console.log('[Service Worker] Installing Service Worker...', event);
	event.waitUntil(
		caches.open('static')  // Saving the files in cache for offline usage
			.then(function(cache){
				console.log('[Service Worker] Precaching App Shell');
				cache.addAll([
					'/',
					'index.html',
					'Movie-DateTime.html',
					//'theatre_view.html',
					'js/app.js',
					'js/movie-day-time.js',
					'js/movie-list-display.js',
					'js/jquery-2.2.3.min',
					'movie.json',
					'images/Movie-Small.jpg',
					'images/Movie-Big.jpg',
					'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
					'https://fonts.googleapis.com/icon?family=Material+Icons',
					'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js',
					'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
					'https://college-movies.herokuapp.com/',
					'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
					'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
					'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
					'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
					'https://fonts.googleapis.com/css?family=Montserrat',
					'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
					'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i',


				]);
			})
	)
});

//  Activating the Service Worker
self.addEventListener('activate', function(event) { 
	console.log('[Service Worker] Activating Service Worker...', event);
	return self.clients.claim();
});

// Fetching the file resources using the Fetch Api
self.addEventListener('fetch', function(event) { 
	event.respondWith(
		caches.match(event.request)
			.then(function(response){
				if(response){
					return response;
				}else{
					return fetch(event.response);
				}
			})
	);
});
