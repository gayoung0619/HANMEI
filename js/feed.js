$(document).ready(function () {
    $('.header').click(function () {
        $(this).parent().toggleClass('on').prev().toggleClass('on');
        if ($('.panel').hasClass('on')){
            $(this).text('ㄴ답글 숨기기')
        }else {
             $(this).text('ㄴ답글 1개 보기');
        }
    });

    // 좋아요 클릭
    $(document).on('click', '.likes', function () {
        var likes = 1;
        var button = $(this).children();
        if(button.text() == 1){
            likes++;
            button.text(likes);
            $(this).css('color', '#FF5555');
        }else{
            likes;
            button.text(likes);
            $(this).css('color', '#A3A3A3');
        }
    });

    //textarea 입력시 reply_box 활성화
    $('.reply_box textarea').on('input', function () {
        var textarea = $(this).val();
        if(textarea.length == 0){
            $(this).parent().removeClass('on');
        }else{
            $(this).parent().addClass('on');
        }
    });


});