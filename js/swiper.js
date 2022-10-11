$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // 필요한 옵션 추가
        direction: 'horizontal',  //vertical수직방향이동
        loop: true,
        observer: true,

        autoplay: {
            delay: 1500,
        },

        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',  //bullets: 동그라미 아이콘 기본, fraction: 숫자
        },
    });
});