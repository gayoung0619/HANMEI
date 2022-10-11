$(document).ready(function () {
    // hanmei 스크립트 시작

    // transform효과
    $('.header_right .search').click(function () {
        const wrapHei = $('.search_wrap').outerHeight();
        $('html, body').css({height: wrapHei, overflow: 'hidden'});
        $('.search_wrap').addClass('on');
    });
    $('.header_right .alarm').click(function () {
        const wrapHei = $('.alarm_wrap').height();
        $('html, body').css({height: wrapHei, overflowY: 'scroll', overflowX: 'hidden'});
        $('.alarm_wrap').addClass('on');
    });
    $('.filter').click(function () {
        const wrapHei = $('.filter_area').height();
        $('html, body').css({height: wrapHei, overflowY: 'scroll', overflowX: 'hidden'});
        $('.filter_area').addClass('on');
    });

    $('.goback').click(function () {
        $('html, body').removeAttr('style');
        $('.search_wrap, .alarm_wrap, .filter_area').removeClass('on');
    });
    $('.latest_search .delete').click(function () {
        $('.search_list ul li').css('display', 'none');
    });

    // 글자수 40자 제한
    $('.lineclamp').each(function(){
        var length = 40;
        $(this).each(function(){
            if($(this).text().length >= length){
                $(this).text($(this).text().substr(0,length)+'...');
            }
        });
    });
    $('textarea').keyup(function () {
        let content = $(this).val();
        // 글자수 세기
        if (content.length == 0 || content == '') {
            $('.count').text('0');
        } else {
            $('.count').text(content.length + '자');
        }
        // 글자수 제한
        if (content.length > 500) {
            $(this).val($(this).val().substring(0, 500));
            alert('글자수는 500자까지 입력 가능합니다.');
        }
    });


    //하트
    $(document).on('click', '.loves', function () {
        // let number = $(this).text();

        if(!$(this).hasClass('on')){
            $(this).addClass('on');
        }else {
            $(this).removeClass('on');
        }
        return false;
    });

    // form에 input을 하면
    const form = $('.form_wrap');
    $('input, textarea').on('input', function () {
        form.each(function () {
            const text = $('input');
            const textarea = $('textarea');
            if( text.val() == '' ||  textarea.val() == '' ){
                $('.wid100').removeClass('on');
            }else if (text.val() && textarea.val() ){
                $('.wid100').addClass('on');
            }
        });
    });
    
    // textarea 글자수 제한하기
    $('textarea').keyup(function () {
        const inputLength = $(this).val().length;
        if(inputLength > 500){
            alert('500자 이상 입력할 수 없습니다');
            $(this).val($(this).val().substring(0, 500));
        }
    });


    $('input').on('input',function () {
        if(!$(this).val() == ""){
            $('.relative_list').css('display', 'block');
            $('.latest_list').css('display', 'none');
            $(this).next('.delete').css('display', 'block');
        }else{
            $('.relative_list').css('display', 'none');
            $('.latest_list').css('display', 'block');
            $(this).next('.delete').css('display', 'none');
        }
    });
    $('.form_wrap .delete, .input_wrap .delete').click(function () {
        $(this).prev().val('').focus();
        $(this).css('display', 'none');
        $('.relative_list').css('display', 'none');
        $('.latest_list').css('display', 'block');
        $('.btn_g').removeClass('on');
    });

    // 탭컨텐츠
    $('.tab:first-of-type, .tabpanel:first-of-type').addClass('on').attr({tabIndex: 0});
    $('.tab:first-of-type').attr({'aria-selected': true}).siblings().attr({'aria-selected': false});
    $('.tabpanel:first-of-type').attr({'aria-hidden': false}).siblings('.tabpanel').attr({'aria-hidden': true});
    $('.tab').on('click', function () {
        $(this).addClass('on').attr({tabIndex: 0, 'aria-selected': true}).siblings().removeClass('on').attr({tabIndex: -1, 'aria-selected': false});
        const $tgPanel = $('#' + $(this).attr('aria-controls'));
        console.log($tgPanel, typeof $tgPanel);
        $tgPanel.addClass('on').attr({tabIndex: 0, 'aria-hidden': false}).siblings('.tabpanel').removeClass('on').attr({tabIndex: -1, 'aria-hidden': true});
    });

    // .select 필터 모달창
    $('.select_btn').on('click', function () {
        $(this).parent().addClass('on');
        $('html, body').css('overflow', 'hidden');
        $(this).next().next().stop().fadeIn('fast');
        $('.select_wrap').css('visibility', 'visible');

        var $close = $('.select_wrap ul li');
        $close.click(function () {
            $('.select').removeClass('on');
            $('html, body').removeAttr('style');
            $(this).parent().parent().prev().stop().fadeOut('fast');
            $('.select_wrap').css('visibility', 'hidden');

            $text = $(this).text();
            $('.select_btn').text($text);
        });
        $('#dim').on('click', function () {
            $('html, body').removeAttr('style');
            $(this).fadeOut('fast');
            $('.select_wrap').css('visibility', 'hidden');

            $text2 = $('.select_btn').text();
            $('.select_btn').text($text2);
            $(this).parent().removeClass('on');
        });

        $('.select_wrap ul li').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
        });
    });

    // .filter_wrap
    $('.filter_wrap .depth1 li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });

    // pd_detail 아코디언
    $('.pd_header').click(function () {
        if( !$(this).parent().hasClass('on')) {
            $(this).parent().addClass('on');
            // 스크롤 최하단으로 이동
            $("html, body").animate({ scrollTop: $(document).height() }, 500);
        }else {
            $(this).parent().removeClass('on');
        }
    });

    const file = $('#file');
    file.on('change', function(){ // 값이 변경되면
        const cur = $('input[type = file]').val();
        $(".upload-name").val(cur);
    });

    const textEle = $('.textarea_size');
    textEle.on('input', function() {
        if( $(this).val() == '' ){
            $(this).css({'max-height': '34px', 'line-height': '34px'});
        }else{
            $(this).css({'max-height': '60px', 'line-height': '20px'});
            $(this).height($(this).scrollHeight);
            adjustHeight();
        }
    });

    // top버튼
    $('.top_btn').on('click', function () {
        $('html, body').stop().animate({scrollTop: 0});
        return false;
    });

    // 답글보기, 답글숨기기
    $('.reply_btn').click(function () {
        if ($('.panel').hasClass('on')){
            $(this).prev().removeClass('on');
            $(this).removeClass('on').children().text('ㄴ답글 1개 보기');
        }else {
            $(this).prev().addClass('on');
            $(this).addClass('on').children().text('ㄴ답글 숨기기');
        }
    });

    // x버튼 사진 remove
    $('.btn_close, .pic_remove').click(function () {
        $(this).parent('.file_img').css('display', 'none');
        $(this).parent('.area_wrap').css({'display':'none'});
        $(this).parent('li').css('display', 'none');
    });


    // 마이페이지 - mypage 아코디언
    $('.accordion > p').on('click', function () {
        $('.profile_list').toggleClass('on');
        if ($(this).hasClass('on')) { //2-1) 현재 ul이 열려진 경우
            $(this).removeClass('on').next('ul').stop().animate({maxHeight: 0}, function () {
                $(this).css({visibility: 'hidden'});
            });
        } else {
            $(this).next('ul').css({visibility: 'visible'}).stop().animate({maxHeight: 1000}).prev().addClass('on');
        }
        return false;
    });


    // 토글버튼
    $('.toggle_btn').click(function () {
        if ($('.toggle_btn').hasClass('on')) {
            $(this).removeClass('on');
            $('.alert').addClass('on').children('span').text('이메일 수신이 거절되었습니다');
        }else{
            $(this).addClass('on');
            $('.alert').addClass('on').children('span').text('이메일 수신동의가 완료 되었습니다');
        }
    });
    $('.alert .delete').click(function () {
        $('.alert').removeClass('on');
    });


});
function adjustHeight() {
    const textEle = $('.textarea_size');
    textEle[0].style.height = 'auto';
    var textEleHeight = textEle.prop('scrollHeight');
    textEle.css('height', textEleHeight );
}
