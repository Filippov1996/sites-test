$(document).ready(function(){
	

    $(".btn-mob").on('click',function(){
        
        $("#menu-mob-win").fadeIn(500)
        
    });
    
    $("#menu-mob-win .close").on('click',function(){
        
        $("#menu-mob-win").fadeOut(500)
        
    });
    
    
    
    
    
    $(".desctop-menu a").on('click',function(e){
        e.preventDefault();
         let elem = $(this).attr("href");
         
        $("html,body").animate({
                        scrollTop:$(elem).offset().top
            },1000);
        
        
    });
    
    
    $(".list-menu a").on('click',function(e){
        e.preventDefault();
         let elem = $(this).attr("href");
         
        $("html,body").animate({
                        scrollTop:$(elem).offset().top
            },1000);
        
        
    });
    
    
    
    
    
    
    
    
    wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: false,
                    live: true
                });
	
	
	wow.init();
    
    

    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});