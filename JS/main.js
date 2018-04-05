//var base = 'http://localhost:5000/';
var base = 'https://keithandnikki.herokuapp.com/';
var registerservice = base + 'register';
var webtrackservice = base + 'pagetrack';

var sc_project=11672539;
var sc_invisible=0;
var sc_security="527ad8ab";

$(document).ready(function(){
//.addEventListener('toggle', myFunction);
    $(document).on('click', '#submit', function() {
        console.log("caught event!");
        registerusers();
    });
    //setmyname();
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
var setmyname = function(){
         var vars=[];
          var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
          for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
         }
         var param1 = vars.param1;

         if (param1 != undefined){
            param1 = decodeURIComponent(decodeURIComponent(param1));
            document.getElementById("textName").value = param1;
            console.log(param1);
         }
}
$(function () {
    $("#declinebtn").on("tap",function(){
       var choices={};
       choices.accept='false';
       var name = document.getElementById("textNamersvp").value;
       choices.name = name;
       choices.foodchoice="none";
       console.log("entered name");
       console.log(name);
       registeruser(choices);
   });
});
$(function () {
    $("#acceptbtn").on("tap",function(){
       var name = document.getElementById("textNamersvp").value;
       console.log(name);
       $.mobile.changePage("form.html",{transition: "slide", reloadPage: true, data:{param1:encodeURIComponent(name)}});
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
function nextImage(i,imgURL,imgInfo,pstyle){
        if (i < (imgURL.length - 1)) {
            i++
        } else {
            i = 0;
        }
        var imgStr = "<img src=" + imgURL[i] + " style='width:100%'>";
        imgStr += pstyle + imgInfo[i] + "</p>";
        $('#ImageDiv').html(imgStr);
}
