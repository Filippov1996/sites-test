$(document).ready(function(){
    
    
    $("body").on('click',".js-btn-switch",function(e){
        
        var parent = $(this).parents(".reviews__item-comment");
        var text  = parent.find(".text");
        text.toggleClass("full-text")
        if(text.hasClass('full-text')){
            $(this).text("Свернуть");
        }else{
            $(this).text("Читать далее");
        }
    });
    
    
    
    
    
    
    
    
    
    $('.reviews__item-full-text').each(function(){
                var text_len =  $(this).text().length;
                var btn_text =  $(this).next('.js-btn-switch');
                console.log(text_len);
                if(text_len<=267){
                        btn_text.remove();
                }
            });
});