$(document).ready(function() {
  /* 
    1) .header : aria의 state 초기 설정
    2) 키보드 제어 - 상단방향키, 하단방향키, home, end, enter/spacebar(click 이벤트가 대신 함)
    3) 마우스 제어 - 클릭이벤트

    4) 아코디언 헤더가 focus, blur => .accordion.focus제어
  */
  const $acdn = $('.accordion');
  // 1) .header : aria의 state 초기 설정
  $acdn.find('.header').attr({'aria-expanded': false});

  // 2) 키보드 제어 - 상단방향키, 하단방향키, home, end, enter/spacebar(click 이벤트가 대신 함)
  $acdn.find('.header').on('keydown', function (e) {
    const key = e.keyCode;
    console.log(key);
    switch (key) {
      case 38:  //상단방향키
        if ($(this).is('.first')) {
          $(this).closest('.accordion').find('.last').focus();
        } else {
          $(this).parent().prev().prev().children().focus();
        }
        break;
      case 40:  //하단방향키
        if ($(this).is('.last')) {
          $(this).closest('.accordion').find('.first').focus();
        } else {
          $(this).parent().next().next().children().focus();
        }
        break;
      case 36: //home
        e.preventDefault();
        $(this).closest('.accordion').find('.first').focus();
        break;
      case 35: //end
        e.preventDefault();
        $(this).closest('.accordion').find('.last').focus();
        break;
    }
  });

  // 3) 마우스 제어 - 클릭이벤트
  // 열려진 경우 => 현재 열려진 헤더,패널 초기화
  // 닫겨진 경우
  $acdn.find('.header').on('click', function () {
    if ($(this).is('.on')) { //열려진 경우
      $(this).removeClass('on').attr({'aria-expanded': false}).removeAttr('aria-disabled').parent().next().removeClass('on').attr({tabIndex: -1});
    } else { //닫겨진 경우
      // 아코디언 헤더 : 나자신 헤더.on추가 => state 제어 => 나머지 헤더 형제 => .on제거 => state 초기화
      $(this).addClass('on').attr({'aria-expanded': true, 'aria-disabled': false}).parent().siblings('.tit').children().removeClass('on').attr({'aria-expanded': false}).removeAttr('aria-disabled');

      // 아코디언 패널 : 헤더와 연결된 패널부터 선택 .on 추가 => tabIndex 0 => 나머지 패널형제 .on 제거  => tabIndex -1
      $(this).parent().next().addClass('on').attr({tabIndex: 0}).siblings('.panel.on').removeClass('on').attr({tabIndex: -1});
    }
  });

  // 4) 아코디언 헤더가 focus, blur => .accordion.focus제어
  $acdn.find('.header').on({
    focus: function () {
      $(this).closest('.accordion').addClass('focus');
    },
    blur: function () {
      $(this).closest('.accordion').removeClass('focus');
    }
  });
});