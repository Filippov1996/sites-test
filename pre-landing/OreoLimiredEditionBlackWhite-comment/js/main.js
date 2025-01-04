$(document).ready(function(){	
	var click = false;
  	$(".footer-custom__btn-text").on('click',function(){
		    
			if(click==false){
				$(this).text('Collapse');
				click=true;
				
			}else if(click==true){
				$(this).text('Read more');
				click=false;
			}
		
		
			$('.footer-custom__text .hide').toggleClass('show');
			$(".points").toggleClass('hide');
	});
	
	
	$(".footer-custom__link").eq(0).on('click',function(){
			$('.popup-policy').fadeIn(400);
		
	});
	$(".popup-policy .close").on('click',function(){
			$('.popup-policy').fadeOut(400);
		
	});
	$(".footer-custom__link").eq(1).on('click',function(){
			$('.popup-callback').fadeIn(400);
		
	});
	$(".popup-callback .close").on('click',function(){
			$('.popup-callback').fadeOut(400);
		
	});
	
	
	
	
	
	
	
	$(".popup-callback__btn").on("click",function(e){
			e.preventDefault();
			var name = $(".input-name").val();
		    var email = $(".input-email").val();
		    var message = $(".popup-callback__form-textarea").val();
			$.ajax({
                                //url: '#',
                                method: 'post',
                                dataType: 'html',
                                data: {
                                    name:name,
                                    email:email,
                                    message:message
                                },
                                beforeSend : function (){
                                    
                                },
                                success: function(data){
                                      
                                       $(".input-name").val('');
                                       $(".input-email").val('');
                                       $(".popup-callback__form-textarea").val('');
                                   
                                }
                             }); 		
		
	});
		
	
});