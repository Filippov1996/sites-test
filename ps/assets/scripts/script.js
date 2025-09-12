$(document).ready(function() { 
    var swiper = new Swiper(".swiperItems", {
       slidesPerView: "auto",
      spaceBetween: 10,  
       navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });

    $(".js-burger").on('click',function(){
        $('.banner__nav-mob-wl').slideToggle(400);
        
        $(".js-burger .item-top").toggleClass("move");
        $(".js-burger .item-bot").toggleClass("move");
        
        
        
    });
    
    

    $(".js-data .point").each(function(i){
                $(this).on('click',function(){
                    $(".js-data .point").removeClass("active");
                    $(this).addClass("active");
                
                
                    swiper.slideTo(i);
            });    
    });
    
    
    
    
    
    
    
    
    
    
});