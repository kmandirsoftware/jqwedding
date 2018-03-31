$(document).ready(function(){
    var i = 0;
    var imgURL = [];
    var imgInfo = [];

    imgURL.push('images/kaylakarl.jpg');
    imgInfo.push('Nikki\'s Mom Kayla and step dad Carl');

    var pstyle = "<p style='font-family:Brush Script Std, cursive;font-weight:bold;font-size:2.0em;margin: 0;padding: 0 auto;'>";
    var imgStr = "<img src=" + imgURL[i] + " style='width:100%'>";
        imgStr += pstyle + imgInfo[i] + "</p>";
    $('#ImageDiv').html(imgStr);


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
