$(document).ready(function(){
    var i = 0;
    var imgURL = [];
    var imgInfo = [];

    imgURL.push('images/kaylakarl.jpg');
    imgInfo.push('Nikki\'s Mom Kayla and step dad Carl');
    imgURL.push('images/tristaandcj.jpg');
    imgInfo.push('Nikki\'s brother CJ and girlfriend Trista');
    imgURL.push('images/philandclella.jpg');
    imgInfo.push('Nikki\'s Dad Phillip and step mom Clella');

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
