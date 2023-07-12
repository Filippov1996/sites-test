$(document).ready(function(){
    var i=1;
    setInterval(function(){
        i+=1;
        
            $("#bg-image").animate({
                    opacity: 0.0
        
                },1500,function(){
                
                $("#bg-image").css({
                    backgroundImage: "url(img/bg/bg"+i+".jpg)"
                });
                
            
                
                $("#bg-image").animate({
                    opacity: 1
                },1500);
        });
        if(i==9){
            i=1;
            
        }
        console.log(i);
    },10000);
    
   
    
   $(".about").click(function(){
        
    $("#about").fadeIn(1500); 
       var docHeight = $(document).height();
               $("body").append("<div id='overlay'></div>");
               $("#overlay").height(docHeight);    
       $(this).addClass("anim");
   });
    
    $("#about .ex").click(function(){
        $("#about").fadeOut(1000); 
        $("#overlay").remove();
        $(".about").removeClass('anim');
    });
    
    $("#about .button").click(function(){
         $("#about").fadeOut(1000); 
         $("#overlay").remove();
         $(".about").removeClass('anim');
    });
    
    $(".price").click(function(){
        
        $("#price").fadeIn(1500); 
        var docHeight = $(document).height();
        $("body").append("<div id='overlay'></div>");
               $("#overlay")
                  .height(docHeight);  
        $(this).addClass("anim");
   });
    
    $("#price .ex").click(function(){
        
        $("#price").fadeOut(1000); 
        $("#overlay").remove();
        $(".price").removeClass('anim');
   });
    $("#price .button").click(function(){
        
        $("#price").fadeOut(1000); 
       $("#overlay").remove();
        $(".price").removeClass('anim');
   });
    
    
    
    $(".work").click(function(){
        
        $("#work").fadeIn(1500); 
        var docHeight = $(document).height();
       $("body").append("<div id='overlay'></div>");
               $("#overlay")
                  .height(docHeight);  
        $(this).addClass("anim");
   });
    

    $("#work .ex").click(function(){
        
        $("#work").fadeOut(1500); 
        $("#overlay").remove();
         $(".work").removeClass('anim');
       
   });
    $("#work .button").click(function(){
        
        $("#work").fadeOut(1500); 
       $("#overlay").remove();
         $(".work").removeClass('anim');
   });
    
    $(".ls").click(function(){
        
        $("#ls").fadeIn(1000); 
       var docHeight = $(document).height();
       $("body").append("<div id='overlay'></div>");
               $("#overlay").height(docHeight);  
        $(this).addClass("anim");
   });
    
   $("#ls .ex").click(function(){
        
        $("#ls").fadeOut(1000); 
        $("#overlay").remove();
       $(".ls").removeClass('anim');
   }); 
   $("#ls .button").click(function(){
        
        $("#ls").fadeOut(1000); 
        $("#overlay").remove();
        $(".ls").removeClass('anim');
   });  
    
    
    
   $(".contact").click(function(){
        
        $("#contact").fadeIn(1000); 
       var docHeight = $(document).height();
       $("body").append("<div id='overlay'></div>");
        $("#overlay").height(docHeight);  
         $(this).addClass("anim");
       
   });
    
    $("#contact .ex").click(function(){
        
        $("#contact").fadeOut(1000); 
        $("#overlay").remove();
        $(".contact").removeClass('anim');
   });
   $("#contact .button").click(function(){
        
        $("#contact").fadeOut(1000); 
        $("#overlay").remove();
       $(".contact").removeClass('anim');
   }); 
    
   $("a.manager").click(function(e){
       e.preventDefault();
       var docHeight = $(document).height();
       $("body").append("<div id='overlay2'></div>");
               $("#overlay2")
                  .height(docHeight); 
      $("#manager").fadeIn(1000); 
       
   });
    
    $("#manager .ex").click(function(){
        $("#manager").fadeOut(1000); 
        $("#overlay2").remove();
    });
     $("#manager p").click(function(){
        $("#manager").fadeOut(1000); 
        $("#overlay2").remove();
    })
    
    $(".vk").click(function(){
        
        $(this).addClass("anim");
        
    });
    $(".instagram").click(function(){
        
        $(this).addClass("anim");
        
    });
});