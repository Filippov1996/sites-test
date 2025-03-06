$(document).ready(function(){
    $(window).scroll(function(){
         var scroll = $(window).scrollTop();
         if(scroll>0){
             $(".nav__row-two").addClass("row-flex");
             
         }else{
             $(".nav__row-two").removeClass("row-flex");
         }
    });
    $(".nav__mobile-btn").on("click",function(){
        $('.nav__mobile-btn span').eq(0).toggleClass("anim1");
        $('.nav__mobile-btn span').eq(1).toggleClass("anim2"); 
        $('.nav__mobile-btn span').eq(2).toggleClass("anim3"); 
        $(".mobile-menu").slideToggle(500);
    });
    
});
	