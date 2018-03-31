//var base = 'http://192.168.1.14:5000/';
var base = 'https://keithandnikki.herokuapp.com/';
var registerservice = base + 'register';
var webtrackservice = base + 'pagetrack';

$(document).ready(function(){
//.addEventListener('toggle', myFunction);
    $(document).on('click', '#submit', function() {
        console.log("caught event!");
        registerusers();
    });
});

function registerusers(){
    var choices={};
    choices.accept='false';
    console.log("called myFunction");
   var name = document.getElementById("textName").value;
    choices.name = name;
    console.log(name);
   $("input:checkbox[class=chk]").each(function () {
         if($(this).is(":checked")){
           if($(this).attr("id") == "acceptInvite"){
              accepted = 'true';
              choices.accept='true';
           }
           if($(this).attr("name") == "mealchoice"){
              mymealchoice = $(this).attr("id");
              console.log(mymealchoice);
              choices.foodchoice=mymealchoice;
              choices.accept='true';
           }
           console.log("Id: " + $(this).attr("id") + " Value: " + $(this).val() );
         }
      });
    registeruser(choices);
}


function registeruser(choices) {
    $.ajax(
    {
        type: "GET",
        url: registerservice + '?foodchoice=' + choices.foodchoice+ '&name=' + choices.name + '&accept='+ choices.accept,
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        success: function (data) {
           //$("#catalog tbody tr").remove();
           $.mobile.changePage("/");
        },

        error: function (msg) {
            //alert(msg.responseText);
            alert("Something bad happend!");
        }
    });
}
$(function () {
    $("#basicICal").on("tap",function(){
      pageTrack("calendar");
      buildICSEntry();
   });
});

var buildICSEntry = function(){
    	var calEntry = icsFormatter();

    	var title = 'Keith & Nikki\'s Wedding';
    	var place = '150 Clayton Lane, Denver, Colorado, 80206';
    	var begin = new Date('9/1/2018 5:00 pm');
    	var end = new Date('8/1/2018 11:00 pm');

    	var description = 'Keith & Nikki\'s Wedding Day! Located at 150 Clayton Lane, Denver, Colorado, 80206';

		calEntry.addEvent(title,description, place, begin.toUTCString(), begin.toUTCString());
		calEntry.download('KeithandNikkiWeddingDay');
 }

var pageTrack = function(page){
    $.ajax(
    {
        type: "GET",
        url: webtrackservice + '?page=' + page,
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        success: function (data) {
        },
        error: function (msg) {
        }
    });
}
