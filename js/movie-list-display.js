$(function(){
	var url;
	if(navigator.onLine)
	{
		//  Url to get Movie Data Through Api
		url = 'https://college-movies.herokuapp.com/';
	}
	else
	{
		url = 'movie.json';
	}
	
	//  Getting back Data & Displaying it on the Index page
	$.ajax({
	  	dataType: "json",
	  	url: url,
	  	success: function (result) 
	  	{ 
			for(var i = 0; i < result.length; i++)
			{
			//	console.log( (i+1) + "  " +  result[i]['title']);
				var mvtitle1 = result[i].title;;
				var mTitle = (i) + '-' + (i+1) + '-' + result[i].title;

				//$('#MovieTitles').append('<div class="col-md-3 text-center">' + '<img src="images/Movie-Small.jpg" style="width:100%"/>' + '<p><h4><a class="movie_titles" id = "' + mTitle +'" href="">'+ result[i].title + '</a></h4></p><br><br><br><br><br><br><br>' + '</div>');
				if (i<result.length)
				{
					$('#MovieTitles').append('<div class="w3-quarter w3-center">'+'<img src="images/Movie-Small.jpg" style="width:30%"/>' + '<p><h4><a class="movie_titles text-center" id = "' + mTitle +'" href="">'+ result[i].title + '</a></h4></p><br><br>' + '</div>');
					i++;
				}
				else 
				{ break; }
				
				if (i<result.length)
				{
					mTitle = (i) + '-' + (i+1) + '-' + result[i].title;
					$('#MovieTitles').append('<div class="w3-quarter w3-center">'+'<img src="images/Movie-Small.jpg" style="width:30%"/>' + '<p><h4><a class="movie_titles text-center" id = "' + mTitle +'" href="">'+ result[i].title + '</a></h4></p><br><br>' + '</div>');
					i++;
				}
				else 
				{ break; }

				if (i<result.length)
				{
					mTitle = (i) + '-' + (i+1) + '-' + result[i].title;
					$('#MovieTitles').append('<div class="w3-quarter w3-center">'+'<img src="images/Movie-Small.jpg" style="width:30%"/>' + '<p><h4><a class="movie_titles text-center" id = "' + mTitle +'" href="">'+ result[i].title + '</a></h4></p><br><br>' + '</div>');
					i++;
				}
				else 
				{ break; }

				if (i<result.length)
				{
					mTitle = (i) + '-' + (i+1) + '-' + result[i].title;
					$('#MovieTitles').append('<div class="w3-quarter w3-center">'+'<img src="images/Movie-Small.jpg" style="width:30%"/>' + '<p><h4><a class="movie_titles text-center" id = "' + mTitle +'" href="">'+ result[i].title + '</a></h4></p><br><br>' + '</div>');
					i++;
				}
				else 
				{ break; }
				
				//console.log(i + mTitle);
			}
			console.log(i + mTitle);
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
					console.log(movie_title + x + y + movie_name);
					
					console.log(movie_details);
					
					MovieJSON = JSON.stringify(movie_details);

					localStorage.setItem("MovieJSON", MovieJSON);
					window.location.href = 'Movie-DateTime.html';
			});
	  	}
	});

});

