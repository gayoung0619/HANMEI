$(document).ready(function () {
    // pop-up close
    $('.btn_close, .btn_close_icon').click(function () {
        $('.wrap_b').hide();
    });


    // 오늘하루닫기
    checkCookie();
});

// 오늘하루닫기
function closeWin() {
    setCookie( "maindiv", "done" , 1 ); //쿠키를 생성함
    document.querySelector(".wrap_b").style.display="none";
}
function setCookie( name, value, expiredays ) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function checkCookie() {
//쿠키값이 있으면 element를 가려준다
    if(getCookie("maindiv") == "done"){
        document.querySelector(".wrap_b").style.display="none";
    }else{
//쿠키값이 없으면 element를 보여준다
        document.querySelector(".wrap_b").style.display="block";
    }
}
function getCookie( name ) {
    var nameOfCookie = name + "=";
    var x = 0;
    while ( x <= document.cookie.length ) {
        var y = (x+nameOfCookie.length);
        if ( document.cookie.substring( x, y ) == nameOfCookie ) {
            if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
                endOfCookie = document.cookie.length;
            return unescape( document.cookie.substring( y, endOfCookie ) );
        }
        x = document.cookie.indexOf( " ", x ) + 1;
        if ( x == 0 )
            break;
    }
    return "";
}



