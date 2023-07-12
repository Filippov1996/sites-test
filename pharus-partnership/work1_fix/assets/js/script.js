$(document).ready(function(){	

    
    $('.tabs-field .tab-item').each(function(i){
        $(this).on('click',function(){
            /*
             $(".slide").removeClass('show');
             $(".slide").eq(i).addClass('show'); 
            */


            clearInterval(autoClick);


            $('.tabs-field .tab-item').removeClass('active'); 
            $(this).addClass("active");
            
            $(".slide").removeClass("show").addClass("hide");
             $(".slide").eq(i).removeClass("hide").addClass("show");
        });
    });
    
    
    var count = 1;




    var autoClick =  setInterval(function(){
             if(count<3){
                 $(".slide").removeClass("show").addClass("hide");
                 $(".slide").eq(count).removeClass("hide").addClass("show");

                  $('.tabs-field .tab-item').removeClass('active'); 
                  $('.tabs-field .tab-item').eq(count).addClass("active");



                 count++; 
                 if(count==3){
                   
                    count = 0;

                 }
             }
    }, 5000);





    
});