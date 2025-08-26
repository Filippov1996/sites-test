$(document).ready(function() { 
    var swiper = new Swiper(".slider-tab1", {
      navigation: {
        nextEl: ".slider-tab1 .next",
        prevEl: ".slider-tab1 .prev",
      },
        
       pagination: {
        el: ".swiper-pagination",
            clickable: true,
      },
    });


    $(".mask-phone").mask('+7(999) 999-99-99');

    $('.js-popup-close').on("click",function(){
        $('.popup-done').fadeOut(500)
    });
    
    $('.popup-done__win').on("click",function(e){
        e.stopPropagation();
    })
    $('body').on("click",function(e){
        $('.popup-done').fadeOut(500)
    });
    
    
    
    
    $(".js-tab-item").each(function(i){
        $(this).on('click',function(){
            $(".js-tab-item").removeClass('active'); 
            $(this).addClass('active'); 
            $(".js-tab-item .icon-open").removeClass('hide');    
            $(".js-tab-item .icon-close").addClass('hide'); 
            
             var status =  $(".js-tab-item").eq(0).attr('data-click');
            status = Boolean(status)
             $(".js-tab-item").eq(0).attr('data-click');
            var icon_status = $(this).find(".icon-close");
        
            if(icon_status.hasClass('hide')){
                $(this).find(".icon-open").addClass('hide');
                icon_status.removeClass('hide')
        
            }
            
            if($('.js-tab-win').eq(i).is(":hidden")){
            $('.js-tab-win:visible').fadeOut(300,function(){
                
                    $('.js-tab-win:hidden').eq(i).fadeIn(300);
                    console.log('www')
                
            });
            }
        });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
});