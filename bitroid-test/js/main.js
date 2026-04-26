$(document).ready(function() { 
    
    /* menus*/
	$(".js-burger-menu").on('click',function(){
		
		
		
		$(".js-burger-menu span").eq(0).toggleClass('move-line-top');
		$(".js-burger-menu span").eq(1).toggleClass('hide-line');
		$(".js-burger-menu span").eq(2).toggleClass('move-line-bot');
		$(".js-burger-menu span").toggleClass("active");
		$(".js-win-memu").slideToggle(400);
	});
    
    
    const slider_recommend = new Swiper('.js-slider-recommend', {
           
            spaceBetween: 20,       
            loop: true, 
            navigation: {
                nextEl: '.next-swiper',
                prevEl: '.prev-swiper',
            },
            pagination: {
                el: '.recommend__pagination',
                clickable: true,
            }        
});
    const swiper = new Swiper('.mySwiper', {
           
            spaceBetween: 20,       
            loop: true, 
            navigation: {
                nextEl: '.next-swiper',
                prevEl: '.prev-swiper',
            },
            pagination: {
                el: '.case__pagination',
                clickable: true,
            },
            breakpoints: {
              1062:{
                    slidesPerView: 3,       
                    centeredSlides: true,    
                },
              460:{
                    slidesPerView:2,       
                    centeredSlides: false, 
                     spaceBetween: 16    
              },
              0:{
                  slidesPerView:1,       
                    centeredSlides: false, 
              }
             
                
          }         
});

   
 /*faq*/
    
    $('.faq__desc-item').on('click',function() {
      //$(this).find(".faq__btn-open span").eq(1).fadeToggle(200);
       
   
                var parent = $(this);
        
                if (parent.hasClass('is-active')){
                    // то мы его удаляем
                    parent.removeClass('is-active'); 
                    parent.find('.faq__item-text').slideUp(400);
                     parent.find(".faq__btn-open").removeClass("active"); 
                }
                else {
                  
                    $('.faq__desc-item').removeClass('is-active');
                    $('.faq__desc-item .faq__item-text').slideUp(400);
                    $(".faq__btn-open").removeClass("active");
                     parent.addClass('is-active');  
                     parent.find(".faq__btn-open").toggleClass("active");
                     parent.find('.faq__item-text').slideDown(400);
                    
                }
    });
    
    
     /*faq end*/   
    
    
    
    $('.js-mob-parent-item').on('click',function(e){
        e.preventDefault();
        $(this).find('.js-child-mob-menu').slideToggle(500);
        
    });
    
    
    
    
    
});