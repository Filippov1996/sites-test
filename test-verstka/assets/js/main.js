

 $(document).ready(function(){
     
     
    $(".hamburger").on("click",function(){
        $('.menu').addClass('menu_active')
    });
     
     
    $(".hamburger").on("click",function(){
        $('.menu').addClass('menu_active')
    }); 
     
     
     $(".menu__close").on("click",function(){
        $('.menu').removeClass('menu_active')
    }); 
     
     
     $(".banner__button").on("click",function(){
        $('.form__modal').fadeIn(500);
    }); 
     
     
      $(".form__close").on("click",function(){
        $('.form__modal').fadeOut(500);
    }); 
     
     
     
     
     
 });