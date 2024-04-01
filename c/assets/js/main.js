$(document).ready(function(){
    
    
    $(".header__banner-btn").on("click",function(){
        $(".popup").fadeIn(400);
    });
    
    $(".popup__close").on("click",function(){
        $(".popup").fadeOut(400);
    });
    
    
    
    $(".header__nav-mobile-btn").on("click",function(){
        $(".header__nav-mobile-btn span").eq(0).toggleClass('anim-line1');
        $(".header__nav-mobile-btn span").eq(1).toggleClass('anim-line2');
        
        $(".header__nav-mobile-btn span").eq(2).toggleClass('anim-line3');
        $(".header__nav-mobile-btn span").eq(3).toggleClass('anim-line4');
        
        
        $(".popup").fadeOut(400);
    });
    
    
    
    $(".header__nav-mobile-btn").on("click",function(){
        $(".header__nav-menu").slideToggle(400);
    });
    
    $(".input-phone").mask('+7(000) 000-0000');
});