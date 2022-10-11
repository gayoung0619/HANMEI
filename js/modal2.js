$(document).ready(function() {
  $(document).on('click', '.md_pic_btn', function () {
     const $openBtn = $(this);
     const $mdCnt = $($(this).attr('data-href'));
     const $closeBtn = $mdCnt.find('.md_close_btn');
     const wrapHei = $('#wrap').outerHeight();
     $('html, body').css({height: wrapHei, overflow: 'hidden'});

 
     $mdCnt.before('<div id="dim_op100"></div>');
     const $dim = $('#dim_op100');
     $dim.stop().fadeIn().next().css('visibility', 'visible').find('[data-link="first"]').focus();
 
     $closeBtn.on('click', function () {
       // 1) html, body에게 준 높이를 제거 -> removeAttr('style')
       $('html, body').removeAttr('style');
 
       $dim.stop().fadeOut(function () {
         $(this).remove();
       });
       
       $mdCnt.css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');

       // 4) 모달열기 버튼에 포커스 강제 이동
       $openBtn.focus();
    });
 
     //  esc , #dim 클릭시 닫기버튼과 동일하게 처리
     $dim.on('click', function () {
       $closeBtn.trigger('click');
     });
  });
 });