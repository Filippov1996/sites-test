$(document).ready(function(){	
    
	 
	
	$(".callback form button").on("click",function(){

      
      
      $(".callback form").validate({
        rules: {
        	    secondname: {
                    required: true
                },
                firstname: {
                    required: true
                },
                email: {
                        required: true,
                        email:true
                },
                phone: {
                        required: true,
                      
                }
            },
         messages:{
               	secondname:{
                        required:"Поле обязательно",
                        max:"До 50 символов"
                 },
                 firstname:{
                        required:"Поле обязательно",
                        max:"До 50 символов"
                 },
                 email:{
                 		required:"Поле обязательно",
                        email:"Введите email"	

                 },
                phone:{
                        required:"Поле обязательно"
                
                    }

            },
            submitHandler: function() {
                 if ($("#check-politic").is(':checked')){
                    if($(".afferta label").hasClass('checkPlease')){

                         $(".afferta label").removeClass("checkPlease");
                    }
                    $(".callback").addClass("hide");
                            setTimeout(function(){
                               
                                $(".callback").css({'display':"none"});
                        
                                $(".calendar").css({'display':"block"});
                                $(".calendar").addClass("show");
                            },1000);
					 		setTimeout(function(){
                    
                    
                   
							$(".calendar").removeClass("none"); 
							$(".calendar").removeClass("show");
               			},2000);
              }else{
                $(".afferta label").addClass("checkPlease");
              }              
            }
          
    });

});
	
	
	
	
	
    
});	