$(document).ready(function(){
    
    
    $("body").on('click',".js-btn-switch",function(e){
        
        var parent = $(this).parents(".reviews__item-comment");
        var text  = parent.find(".text");
        text.toggleClass("full-text")
        if(text.hasClass('full-text')){
            $(this).text("Свернуть");
        }else{
            $(this).text("Читать продолжение");
        }
    });
    
});