
// DEVELOPER

// SUDHANVA HUKKERI ===== 10383120


 var selName = [];
 var selNumber = [];
 var selSeats = [];
 var selected = false;

 var m_Specs = localStorage.getItem("MoviespecsJSON");
	
 var m_spe = m_Specs.split("-");

 
 var m_day = m_spe[0];
 var m_nam = m_spe[1];
 var m_time = m_spe[2];


$(function(){

    //console.log( m_day + m_nam +  m_time );

    $('#movie_selected').append('<h1 class="display-1">' + m_nam + '</h1>' +
                                '<h2 class="wthree bg-danger p-1" style="background-image: url(&quot;images/whiteBackGround.jpg&quot;);">' +
                                 m_day + " at " + m_time + '</h2>');
     
});


function onLoaderFunc() {
    $(".seatStructure *").prop("disabled", true);
    $(".displayerBoxes *").prop("disabled", true);
}

function takeData() {
    if (($("#Username").val().length == 0) || ($("#Numseats").val().length == 0)) {
        alert("Please Enter your Name and Number of Seats");
    } else {
        $(".inputForm *").prop("disabled", true);
        $(".seatStructure *").prop("disabled", false);
        document.getElementById("notification").innerHTML =
            "<b style='margin-bottom:0px;background:#ff9800;letter-spacing:1px;'>Please Select your Seats NOW!</b>";
    }
}


function updateTextArea() {

    if ($("input:checked").length == ($("#Numseats").val())) 
    {
        $(".seatStructure *").prop("disabled", true);

        selName.push($("#Username").val());
        selNumber.push($("#Numseats").val());
        $('#seatsBlock :checked').each(function () {
            selSeats.push($(this).val());
        });

        //Displaying 
        $('#nameDisplay').val(selName);
        $('#NumberDisplay').val(selNumber);
        $('#seatsDisplay').val(selSeats);
        selected = true;

    } else {
        alert("Please select " + ($("#Numseats").val()) + " seats")
    }
}


function myFunction() {
    alert($("input:checked").length);
}


$(":checkbox").click(function () {
    if ($("input:checked").length == ($("#Numseats").val())) 
    {
        $(":checkbox").prop('disabled', true);
        $(':checked').prop('disabled', false);
    } else {
        $(":checkbox").prop('disabled', false);
    }
});

function nextPage(){

    if (selected) 
    {
        //console.log(selName + selNumber + selSeats + m_day + m_nam + m_time);
        var mu_details = selName + '-' + selNumber + '-' + selSeats + '-' + m_day + '-' + m_nam + '-' + m_time;
        //console.log(mu_details);
        selected = false;
        localStorage.setItem("mu_details", mu_details);
        window.location.href = 'Thank-you.html';
    } 
    else 
    {
        alert("Please Select Seats");
    }
};
