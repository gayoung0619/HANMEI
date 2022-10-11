$(document).ready(function() {
/* $('.md_open_btn, .toggle_btn1').on('click', function () {
    const $openBtn = $(this);
    const $mdCnt = $($(this).attr('data-href'));
    const $closeBtn = $mdCnt.find('.md_close_btn');

    const wrapHei = $('#wrap').outerHeight();
    $('html, body').css({height: wrapHei, overflow: 'hidden'});

    $mdCnt.siblings().attr({'aria-hidden': true, inert: ''});

    $mdCnt.before('<div id="dim"></div>');
    const $dim = $('#dim');
    $dim.stop().fadeIn().next().css('visibility', 'visible').find('[data-link="first"]').focus();


    $closeBtn.on('click', function () {
      $('html, body').removeAttr('style');
      $dim.stop().fadeOut(function () {
        $(this).remove();
      });
      $('.md_cnt').css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');
      $openBtn.focus();
   });

    $dim.on('click', function () {
      $closeBtn.trigger('click');
    });
     $('.md_policy .md_close_btn').click(function () {
         var is_checked = true;
         $openBtn.parent().children('input').prop('checked', is_checked);
     });
     $('.cancel').click(function () {
         $closeBtn.trigger('click');
     });
     $('.md_depth_btn2').click(function () {
         $openBtn.parent().parent().parent('article').css('display', 'none');
     });
 });

 $('.md_depth_btn').click(function () {
     $(this).parent().parent().css('visibility', 'hidden');
     $(this).parent().parent().next().css('visibility', 'visible');
 });
$('.md_depth_btn2').click(function () {
    $(this).parent().parent().css('visibility', 'hidden');
    $('#deleteC').css('visibility', 'visible');
});*/
    /*$('.md_open_btn').on('click', function () {

    });
    $('.md_close_btn, #dim').on('click', function () {
        $('.md_two').removeClass('open');
    });*/
});

// 클릭했을떄 모달이 오픈되어야 할때 태그에 onclick으로 밀어넣기
function md_open (type) {
    $('.'+type).addClass('open')
    $('#dim').addClass('open')
}
// 클릭했을떄 모달이 닫혀야 할 태그에 onclick으로 밀어넣기
function md_close (type) {
    $('.'+type).removeClass('open')
    $('#dim').removeClass('open')
}
