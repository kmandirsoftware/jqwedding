$(document).ready(function(){
    var i = 0;
    var imgURL = [];
    var imgInfo = [];

    imgURL.push('images/momanddad.jpg');
    imgInfo.push('Keith\'s dad Karl and mom Muriel');
    imgURL.push('images/andrewandlouise.jpg');
    imgInfo.push('Keith\'s Nephew Andrew and his beautiful wife Louise');
    imgURL.push('images/susanandronald.jpg');
    imgInfo.push('Keith\'s sister in law Susan and brother Ronald');
    imgURL.push('images/lauraandjohn.jpg');
    imgInfo.push('Keith\'s brother in law John and sister Laura');
    imgURL.push('images/travis.jpg');
    imgInfo.push('Keith\'s youngest son Travis');
    imgURL.push('images/graceandas.jpg');
    imgInfo.push('Keith\'s daughter Grace and boyfriend Austin');
    imgURL.push('images/alex.jpg');
    imgInfo.push('Keith\'s oldest son Alex');

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
