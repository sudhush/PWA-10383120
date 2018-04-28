
// DEVELOPER

// SUDHANVA HUKKERI ===== 10383120



$(function(){
	var url;
	// if(navigator.onLine)
	// {
	// 	//  Url to get Movie Data Through Api
	// 	url = 'https://college-movies.herokuapp.com/';
	// 	console.log( url + 'ITS WORKIGN' );
	// }
	// else
	// {
	// 	url = 'movie.json';
	// 	console.log( url + 'ITS WORKIGN' );
	// }
	
		url = 'https://college-movies.herokuapp.com/';
		//console.log( navigator.onLine );

		// if(!navigator.onLine)
		// {
		// 	//  Url to get Movie Data Through Api
		// 	url = 'https://college-movies.herokuapp.com/';
		// 	$.ajax({
		// 		dataType: "json",
		// 		url: url,

		// 	});

		// 	url = 'movie.json';
		// }

	//  Getting back Data & Displaying it on the Index page

	$.ajax({
	  	dataType: "json",
	  	url: url,
	  	success: function (result) 
	  	{ 
			for(var i = 0; i < result.length; i++)
			{
				//console.log( (i+1) + "  " +  result[i]['title']);
				var mvtitle1 = result[i].title;;
				var mTitle = (i) + '-' + (i+1) + '-' + result[i].title;

				$('#MovieTitles').append('<div class="col-6 mask col-lg-4 bg-dark animate-in-down">'+
								'<img src="images/movie'+(i+1)+'.jpg" class="center-block img-fluid my-3" width="300">'+
								'<a id = "'+mTitle+'" class = "movie_titles" href=""><h3 class="mb-0" id = ""><b>' + result[i].title + '</b></h3>'+
								'</a><p class="">'+result[i].genre+' Movie</p></div>');
				
				//console.log(i + mTitle);
			}

			//console.log(i + mTitle);

			$('body').on('click','.movie_titles', function(e){
				//$('.movie_titles').click(function() {
					e.preventDefault();
					var movie_title = $(this).attr('id');
					movie_title = movie_title.split("-");
					var x = movie_title[0];
					var y = movie_title[1];
					var movie_name = movie_title[2];
					var movie_details = result.slice(x,y);
				//	var movie_timings_mon;
					//console.log(movie_title + x + y + movie_name);
					
					//console.log(movie_details);
					MovieJSON = JSON.stringify(movie_details);
					MovieImage = y;

					localStorage.setItem("MovieJSON", MovieJSON);
					localStorage.setItem("MovieImage", MovieImage);
					window.location.href = 'Movie-DateTime.html';
			});
	  	}
	});

});

