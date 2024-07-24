$(document).ready(function(){
		
    $('.single-product__switch').on("click",function(){ 
		
		$(".single-product__description p").toggleClass('full-text');
		
		var icon_arrow = $(this).find(".single-product__icon");
		
		icon_arrow.toggleClass('move-arrow');
		
		if($(".single-product__description p").hasClass('full-text')){
			$(".single-product__switch-text").text("Свернуть")
			
		}else{
			$(".single-product__switch-text").text("Читать больше")
		}
		
	});
	
	 $('.single-product__faq-name').on('click',function() {
      //$(this).find(".advantages__btn-open span").eq(1).fadeToggle(200);
      var desc =  $(this).next('.single-product__faq-desc');
	  var arrow = $(this).find('.single-product__faq-icon');	 
		 desc.slideToggle(500)
   		 arrow.toggleClass('move-arrow')
            
    });
	var similar_products = new Swiper(".similar-products", {
      slidesPerView: "auto",
      spaceBetween: 10
    });
    var related_product = new Swiper(".related-products", {
      slidesPerView: "auto",
      spaceBetween: 10
    });
	
	
	
	
	
	
	
	
	 var specialists = new Swiper(".specialists", {
      slidesPerView: "auto",
      spaceBetween: 10
    });
	
	
	$('body').on("click",function(){
		$(".works-popup").fadeOut(500)
		
	});
	var works = new Swiper(".works__slider", {
      slidesPerView: "auto",
	  pagination: {
				el: ".works__slider-counter",
				type: "fraction",
			  },
	  breakpoints: {
			  0: {
				// When the window width is 600 or more
					 spaceBetween: 10,
				},		
			   1024:{
				    spaceBetween: 17,
			   }
		  }	
    });
	
	
	
	$(".works__slider-prev").on('click',function(e){
		e.stopPropagation();
		works.slidePrev();
		
	});
	
	$(".works__slider-next").on('click',function(e){
		e.stopPropagation();
		works.slideNext();
		
	});
	
	
	$(".swiper-wrapper").on('click',function(e){
		e.stopPropagation();
		
		
	});
	
	var works_popup_sliderD;
	
	
	
	
	var works_popup_sliderM = new Swiper(".works-popup__slider-mobile", {
          slidesPerView: 1.1,
          speed: 500,
          centeredSlides:true,
          spaceBetween:0,
		 loop:true,
		   pagination: {
				el: ".counts-slider-mobile",
				type: "fraction",
			  },
           breakpoints: {
			   600: {
				// When the window width is 600 or more
					slidesPerView: 1.3
				},		
			   
		  }
  });
	
	
	
	
	
	
	
	
	
    $('.works__slider .works__item').each(function(i){
		$(this).on("click",function(){
			works_popup_sliderD = new Swiper(".works-popup__slider-desctop", {
					 slidesPerView: "auto",
					 spaceBetween: 17,
					 loop:true,
					 pagination: {
							el: ".counts-slider-desctop",
							type: "fraction",
						  },
				});
			works_popup_sliderD.slideTo(i);
			works_popup_sliderM.slideTo(i);
			$(".works-popup").fadeIn(500)
		});
	});
	
	
	$('.works-popup__close').on('click',function(){
		$(".works-popup").fadeOut(500)
	
	});
	
	
    $(".works-popup__prev-btn").on('click',function(e){
		e.stopPropagation();
       works_popup_sliderD.slidePrev();
        
       
  	});
	$(".works-popup__next-btn").on('click',function(e){
				e.stopPropagation();
			works_popup_sliderD.slideNext();
	 });  
	
	$('.single-product__difference').on("click",function(){
		$('.single-product__popup-desctop').fadeIn(500);
	});
	
	
	$(".single-product__table-close").on("click",function(){
		$('.single-product__popup-desctop').fadeOut(500);
	})
	
	$(".single-product__popup-mobile .single-product__popup-models-close").on("click",function(){
		$('.single-product__popup-mobile').fadeOut(500);
	})
	
	
	$('.scroll-managers').on('click',function(e){
		e.preventDefault();
		$(".single-product__menegers-popup").fadeIn(500);
	});
	
	$(".single-product__menegers-popup-close").on('click',function(){
	
		$(".single-product__menegers-popup").fadeOut(500);
		works_popup_sliderD = '';
		console.log(works_popup_sliderD)

	});
	
	

	var blog = new Swiper(".blog__slider", {
      slidesPerView: "auto",
	  pagination: {
				el: ".blog__slider-counter",
				type: "fraction",
			  },
	  breakpoints: {
			  0: {
				// When the window width is 600 or more
					 spaceBetween: 10,
				},		
			   1024:{
				    spaceBetween: 17,
			   }
		  }	
    });
	
	
	
	$(".blog__slider-prev").on('click',function(e){
		e.stopPropagation();
		blog.slidePrev();
		
	});
	
	$(".blog__slider-next").on('click',function(e){
		e.stopPropagation();
		blog.slideNext();
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
	