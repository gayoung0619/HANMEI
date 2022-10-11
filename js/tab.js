$(document).ready(function() {
  //  1) 첫번째 .tab과 .tabpanel 활성화 (클래스 추가, tabIndex 0) / aria의 state 초기 설정
  // :first-of-type 필터선택자는 같은 부모에서 동일한 타입을 가진 자식중에 첫번째
  $('.tabpanel').addClass('on').attr({tabIndex: 0});
  $('.tab:first-of-type').attr({'aria-selected': true}).siblings().attr({'aria-selected': false});
  $('.tabpanel:first-of-type').attr({'aria-hidden': false}).siblings('.tabpanel').attr({'aria-hidden': true});


  // 2) 마우스 제어 - 클릭이벤트
  $('.tab').on('click', function () {
    // 탭 : 클릭한탭.tab.on -> tabIndex0 -> aria-selected:true / 클릭하지 않은탭은 반대로 설정하기
    $(this).addClass('on').attr({tabIndex: 0, 'aria-selected': true}).siblings().removeClass('on').attr({tabIndex: -1, 'aria-selected': false});

    // 탭패널 : 선택된 탭패널 .tabpanel.on -> tabIndex0 -> aria-hidden:false / 선택되지 않은 탭패널은 반대로 설정
    // 선택된 탭패널 변수 생성
    const $tgPanel = $('#' + $(this).attr('aria-controls'));
    $tgPanel.addClass('on').attr({tabIndex: 0, 'aria-hidden': false}).siblings('.tabpanel').removeClass('on').attr({tabIndex: -1, 'aria-hidden': true});
  });

});