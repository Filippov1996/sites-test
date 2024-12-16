$(document).ready(function(){
    
    $(".js-btn-burger").on('click',function() {

        $(".js-btn-burger span").eq(0).toggleClass("anim-line1");
        $(".js-btn-burger span").eq(1).toggleClass("hide-line");
        $(".js-btn-burger span").eq(2).toggleClass("anim-line2");
        $('.js-mob-list').toggleClass("up_menu")
    });
   const marqueeSlider1 = new Swiper('.marquee-slider-one',{
        spaceBetween: 10,
        slidesPerView: 'auto',
        loop: !0,
        speed: 5000,
        allowTouchMove: !1,
        grabCursor: !1,
        freeMode: !0,
        autoplay: {
            delay: 0,
            disableOnInteraction: !1,
        },
    });
    const marqueeSlider2 = new Swiper('.marquee-slider-two',{
        spaceBetween: 10,
        slidesPerView: 'auto',
        loop: !0,
        speed: 5000,
        allowTouchMove: !1,
        grabCursor: !1,
        autoplay: {
            delay: 0,
            disableOnInteraction: !1,
            reverseDirection: !0,
        },
    });

});