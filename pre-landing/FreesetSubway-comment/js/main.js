
var swiper = new Swiper(".slider-header", {
	pagination: {
        el: ".swiper-pagination",
		clickable: true,
      }
});
var count = 1;
swiper.on('slideChange', function () {
	if(count<2){
		 count++;
	     $(".slider-header .swiper-pagination").addClass("pag-color2");
	}else if(count==2){
		count--;
		 $(".slider-header .swiper-pagination").removeClass("pag-color2");
	}
});

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
		
	$('.question1 .button-quiz').on("click",function(){
		
			$('.question1').fadeOut(400,function(){
				$('.question2').fadeIn(400);
				
			});
			
		});
		
		$('.question2 .button-quiz').on("click",function(){
			$('.question2').fadeOut(400,function(){
				$('.question3').fadeIn(400);
				
			});
			
		});
		$('.question3 .button-quiz').on("click",function(){
			$('.question3').fadeOut(400,function(){
				$('.question4').fadeIn(400);
				
			});
			
		});
		
		$('.question4 .button-quiz').on("click",function(){
				$('.question4').fadeOut(400,function(){
						$('.question5').fadeIn(400);
				
				});
			
			
		});
		$('.question5 .button-quiz').on("click",function(){
				
			$('.popup-action').fadeIn(800);
			
		});	
		$('.popup-action__close').on("click",function(){
			  $('.popup-action').fadeOut(800);
		});
});