$(document).ready(function(){
    var i = 0;
    var imgURL = [];

    console.log("swiper is ready");
    imgURL.push('images/snowboarding.jpg');
    imgURL.push('images/KilkennyCastle.jpg');
    imgURL.push('images/apartment.jpg');
    imgURL.push('images/13.jpg');
    imgURL.push('images/14.jpg');
    imgURL.push('images/6.jpg');
    imgURL.push('images/8.jpg');
    imgURL.push('images/11.jpg');
    imgURL.push('images/9.jpg');
    imgURL.push('images/12.jpg');
    imgURL.push('images/napa.jpg');
    imgURL.push('images/10.jpg');
    imgURL.push('images/engagement.jpg');
    imgURL.push('images/parkgruell.jpg');

    var imgStr = "<img src=" + imgURL[i] + " style='width:100%'>";
    $('#ImageDiv').html(imgStr);


    $("#myImagePage").swiperight(function () {
        if (i < (imgURL.length - 1)) {
            i++
        } else {
            i = 0;
        }
        var imgStr = "<img src=" + imgURL[i] + " style='width:100%'>";
        $('#ImageDiv').html(imgStr);
    });
    $("#myImagePage").swipeleft(function () {
        if (i > 0) {
            i--
        } else {
            i = (imgURL.length - 1);
        }
        var imgStr = "<img src=" + imgURL[i] + " style='width:100%'>";
        $('#ImageDiv').html(imgStr);
    });
});
