$(document).ready(function () {
    var bar1Pos = $('.bar1').width(); 

    $('.bar1').click(function () {
        $(this).css('background-color','#9AC31C').siblings().css('background-color','#EFEFEF');
        $('.icon_position').css('left', bar1Pos);
        $('.circle3').css('border-color', '#9AC31C').parent('.circle2').css('border-color','#DBDBDB');
        $('.circle1').css('border-color','#DBDBDB');

    });
    $('.bar2').click(function () {
        $(this).css('background-color','#9AC31C').siblings('.bar3').css('background-color','#EFEFEF').siblings('.bar1').css('background-color','#9AC31C');
        $('.icon_position').css('left', bar1Pos*2);
        $('.circle2, .circle3').css('border-color', '#9AC31C').parent('.circle1').css('border-color','#DBDBDB');
    });
    $('.bar3').click(function () {
        $(this).css('background-color','#9AC31C').siblings('.bar1, .bar2').css('background-color','#9AC31C');
        $('.icon_position').css('left', bar1Pos*3);
        $('.circle1, .circle2, .circle3').css('border-color', '#9AC31C');
    });

});