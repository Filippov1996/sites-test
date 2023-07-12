$(document).ready(function(){	

    
    $('.tabs-field .tab-item').each(function(i){
        $(this).on('click',function(){
            /*
             $(".slide").removeClass('show');
             $(".slide").eq(i).addClass('show'); 
            */
            $('.tabs-field .tab-item').removeClass('active'); 
            $(this).addClass("active");
            
            $(".slide").removeClass("show").addClass("hide");
             $(".slide").eq(i).removeClass("hide").addClass("show");
        });
    });
    
    
    
    
});