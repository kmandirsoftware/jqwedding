$(document).ready(function(){
    var i = 0;
    var imgURL = [];
    var imgInfo = [];

    console.log("swiper is ready");
    imgURL.push('images/snowboarding.jpg');
    imgInfo.push('Family reunion in Washington');
    imgURL.push('images/KilkennyCastle.jpg');
    imgInfo.push('Grand Mayan Resort, Cancun');
    imgURL.push('images/apartment.jpg');
    imgInfo.push('Washington Mount Rainier');
    imgURL.push('images/13.jpg');
    imgInfo.push('In Vail at the Ritz Carlton');
    imgURL.push('images/14.jpg');
    imgInfo.push('Hiking in Colorado');
    imgURL.push('images/6.jpg');
    imgInfo.push('Ready for Holiday Party');
    imgURL.push('images/8.jpg');
    imgInfo.push('Pisa Italy.');
    imgURL.push('images/11.jpg');
    imgInfo.push('In Park City Utah for Nikki\'s Birthday');
    imgURL.push('images/9.jpg');
    imgInfo.push('Tower of London');
    imgURL.push('images/12.jpg');
    imgInfo.push('Wine tours in Palisade Colorado.');
    imgURL.push('images/napa.jpg');
    imgInfo.push('Our favorite place to go in Colorado. The Steamboat Grand Resort in Steamboat.');
    imgURL.push('images/10.jpg');
    imgInfo.push('Iceland');
    imgURL.push('images/engagement.jpg');
    imgInfo.push('Aspen Colorado');
    imgURL.push('images/parkgruell.jpg');
    imgInfo.push('Park Gruell in Spain');
    imgURL.push('images/realkilkennycastle.jpg');
    imgInfo.push('KilKenny Castle in Ireland');

    var pstyle = "<p style='font-family:Brush Script Std, cursive;font-weight:bold;font-size:2.0em;margin: 0;padding: 0 auto;'>";
    var imgStr = "<img src=" + imgURL[i] + " style='width:100%'>";
        imgStr += pstyle + imgInfo[i] + "</p>";
    $('#ImageDiv').html(imgStr);

    var timer = setInterval(function() {
        nextImage(i,imgURL,imgInfo,pstyle);
        if (i < (imgURL.length - 1)) {
             i++
         } else {
             i = 0;
         }
    }, 5*1000)

    $("#myImagePage").swiperight(function () {
        if (i < (imgURL.length - 1)) {
            i++
        } else {
            i = 0;
        }
        var imgStr = "<img src=" + imgURL[i] + " style='width:100%'>";
        imgStr += pstyle + imgInfo[i] + "</p>";
        $('#ImageDiv').html(imgStr);
    });
    $("#myImagePage").swipeleft(function () {
        if (i > 0) {
            i--
        } else {
            i = (imgURL.length - 1);
        }
        var imgStr = "<img src=" + imgURL[i] + " style='width:100%'>";
        imgStr += pstyle + imgInfo[i] + "</p>";
        $('#ImageDiv').html(imgStr);
    });
});
