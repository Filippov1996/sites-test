$(document).ready(function() { 
    
    

 var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var year = today.getFullYear();
    var currentDate = `${day}/${month}/${year}`;
    $('.date').text(currentDate);
 
    
    
    
    
    $('.timer').startTimer({
    onComplete: function(element){
      $('html, body').addClass('bodyTimeoutBackground');
    }
  }).click(function(){ location.reload() });
    
    
    
    
    
    
    
    
    
    /*faq*/
    
    $('.faq__desc-item').on('click',function() {
      //$(this).find(".faq__btn-open span").eq(1).fadeToggle(200);
       
   
                var parent = $(this);
        
                if (parent.hasClass('is-active')){
                    // то мы его удаляем
                    parent.removeClass('is-active'); 
                    parent.find('.faq__item-text').slideUp(400);
                     parent.find(".faq__btn-open").removeClass("move"); 
                }
                else {
                  
                    $('.faq__desc-item').removeClass('is-active');
                    $('.faq__desc-item .faq__item-text').slideUp(400);
                    $(".faq__btn-open").removeClass("move");
                     parent.addClass('is-active');  
                     parent.find(".faq__btn-open").toggleClass("move");
                     parent.find('.faq__item-text').slideDown(400);
                    
                }
    });
    
    
     /*faq end*/
    
    
    
    
});