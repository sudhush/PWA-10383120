
// DEVELOPER

// SUDHANVA HUKKERI ===== 10383120


$(function(){

	// Getting Details of the Movie chosen by the User from the Local Storage
	var m_details = localStorage.getItem("MovieJSON");
	var m_image = localStorage.getItem("MovieImage");

	var m_s = JSON.parse(m_details);
	var m_i = JSON.parse(m_image);

	//console.log(m_s);
	//console.log(m_i);
	
	//console.log( m_s[0].title + m_s[0].year + m_s[0].director + m_s[0].cast + m_s[0].genre + m_s[0].notes);

	$('#MovieSelected').append('<div class="p-4 col-md-6 bg-primary text-center"> ' +
								'<h2 class="mb-1 text-center">'+m_s[0].title+'</h2> ' +
								'<i class="fa d-inline-block mx-1 text-white text-center">'+m_s[0].year +'</i>' +
								'<p class="my-4 text-center">'+ "Genre: |" + '<b>'+ m_s[0].genre + '</b>' +"|"+ '</p>' +
								'<p class="my-4 text-center"><b>'+ "Director: " + '</b><u>' + m_s[0].director + '</u>' + '</p>' +
								'<p class="my-4 text-center"><b>'+ "Stars:  " + '</b><p>' + m_s[0].cast + '</p>' +
								'<p class="my-4 text-center">'+ " ~Special Notes~ "+ '<p><b>' + m_s[0].notes + '</p>' +
								'</div>' + '<div class="">' + '<img class="img-fluid" src="images/movie'+m_i+'.jpg" width="300"></div>');
					
					var mspecs;
					for(var i = 0; i < m_s[0].runningTimes.mon.length; i++)
					{
						mspecs = 'Monday-' + m_s[0].title + '-' + m_s[0]['runningTimes']['mon'][i];
						$('#mon').append('<b><li class="list-group-item"><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['mon'][i] +'</a></li></b>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.tue.length; i++)
					{
						mspecs = 'Tuesday-' + m_s[0].title + '-' + m_s[0]['runningTimes']['tue'][i];
						$('#tue').append('<b><li class="list-group-item"><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['tue'][i] +'</a></li></b>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.wed.length; i++)
					{
						mspecs = 'Wednesday-' + m_s[0].title + '-' + m_s[0]['runningTimes']['wed'][i];
						$('#wed').append('<b><li class="list-group-item"><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['wed'][i] +'</a></li></b>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.thu.length; i++)
					{
						mspecs = 'Thursday-' + m_s[0].title + '-' + m_s[0]['runningTimes']['thu'][i] ;
						$('#thu').append('<b><li class="list-group-item"><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['thu'][i] +'</a></li></b>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.fri.length; i++)
					{
						mspecs = 'Friday-' + m_s[0].title + '-' + m_s[0]['runningTimes']['fri'][i]; 
						$('#fri').append('<b><li class="list-group-item"><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['fri'][i] +'</a></li></b>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.sat.length; i++)
					{
						mspecs = 'Saturday-' + m_s[0].title + '-' + m_s[0]['runningTimes']['sat'][i];
						$('#sat').append('<b><li class="list-group-item"><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['sat'][i] +'</a></li></b>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.sun.length; i++)
					{
						mspecs = 'Sunday-' + m_s[0].title + '-' + m_s[0]['runningTimes']['sun'][i]; 
						$('#sun').append('<b><li class="list-group-item"><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['sun'][i] +'</a></li></b>');
						//console.log(mspecs);
					}
			
});

$('body').on('click','.movie_specs',function(e){
	e.preventDefault();
	var movie_spec  = $(this).attr('id');
	MoviespecsJSON = movie_spec;
	
	// movie_spec = movie_spec.split("-");
	// //console.log(movie_spec);
	// var mday = movie_spec[0];
	// var mname = movie_spec[1];
	// var mtime = movie_spec[2];
	// //console.log(mday + mname + mtime );
	
	//MoviespecsJSON = JSON.stringify(movie_spec);

	localStorage.setItem("MoviespecsJSON", MoviespecsJSON);
	window.location.href = 'Book_Seats.html';
});





	

