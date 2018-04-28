
// DEVELOPER

// SUDHANVA HUKKERI ===== 10383120


$(function(){
	
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	  }).catch(function(err) {

			console.log('ServiceWorker registration failed: ', err);
	  });
	}else {
	  console.log('No service-worker on this browser');
	}

});
