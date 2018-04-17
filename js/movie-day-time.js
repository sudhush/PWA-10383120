$(function(){

	// Getting Details of the Movie chosen by the User from the Local Storage
	var m_details = localStorage.getItem("MovieJSON");

	/// m_s = movie_selected
	m_s = JSON.parse(m_details);
//	console.log(m_s);
	
//	console.log( m_s[0].title + m_s[0].year + m_s[0].director + m_s[0].cast + m_s[0].genre + m_s[0].notes);

					$('#MovieDetails').append('<div class="row-md-5 w3-center">' + 
												'<br><br><img src="images/Movie-Big.jpg"/>' + 
												'<p><h1>'+ m_s[0].title + '</h1><h3>('+m_s[0].year +')<h3></p>' + 
												'<p><h4>'+ "Genre - " + '<b>'+ m_s[0].genre + '</b>' + '</h4></p>' +
												'<p><h4>'+ "Directed By - " + '<u>' + m_s[0].director + '</u>' + '</h4></p>' + 
												'<p><h4>'+ "Cast - " + '<p>' + m_s[0].cast + '</p></h4></p>' +
												'<p><h4>'+ "Special Notes - "+ '<p><b>' + m_s[0].notes + '</b></p></h4></p>' +
												'</div>');

					var mspecs;
					for(var i = 0; i < m_s[0].runningTimes.mon.length; i++)
					{
						mspecs =m_s[0]['runningTimes']['mon'][i] + '-Monday-' + m_s[0].title;
						$('#mon').append(' <p><h4><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['mon'][i] +'</a></h4></p>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.tue.length; i++)
					{
						mspecs =m_s[0]['runningTimes']['tue'][i] + '-Tuesday-' + m_s[0].title;
						$('#tue').append(' <p><h4><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['tue'][i] +'</a></h4></p>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.wed.length; i++)
					{
						mspecs =m_s[0]['runningTimes']['wed'][i] + '-Wednesday-' + m_s[0].title;
						$('#wed').append(' <p><h4><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['wed'][i] +'</a></h4></p>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.thu.length; i++)
					{
						mspecs =m_s[0]['runningTimes']['thu'][i] + '-Thursday-' + m_s[0].title;
						$('#thu').append(' <p><h4><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['thu'][i] +'</a></h4></p>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.fri.length; i++)
					{
						mspecs =m_s[0]['runningTimes']['fri'][i] + '-Friday-' + m_s[0].title;
						$('#fri').append(' <p><h4><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['fri'][i] +'</a></h4></p>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.sat.length; i++)
					{
						mspecs =m_s[0]['runningTimes']['sat'][i] + '-Saturday-' + m_s[0].title;
						$('#sat').append(' <p><h4><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['sat'][i] +'</a></h4></p>');
						//console.log(mspecs);
					}
					for(var i = 0; i < m_s[0].runningTimes.sun.length; i++)
					{
						mspecs =m_s[0]['runningTimes']['sun'][i] + '-Sunday-' + m_s[0].title;
						$('#sun').append(' <p><h4><a class = "movie_specs" id = "' + mspecs +'" href="">'+ m_s[0]['runningTimes']['sun'][i] +'</a></h4></p>');
						//console.log(mspecs);
					}
					return false; // stops the loop
			


					

});


$('body').on('click','.movie_specs',function(e){
	//	e.preventDefault();
		var movie_spec  = $(this).attr('id');
		movie_spec = movie_spec.slice("-");
		console.log(movie_spec);
		// var mtime = movie_spec[0];
		// var mday = movie_spec[1];
		// var mname = movie_spec[2];
		// console.log(mname + mtime + mday);
		
		MoviespecsJSON = JSON.stringify(movie_spec);

		localStorage.setItem("MoviespecsJSON", MoviespecsJSON);
		window.location.href = 'Book_Seats.html';
	});


	

