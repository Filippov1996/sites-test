$(document).ready(function(){
		var my_video = document.getElementById("my_video");
		var my_video = my_video.getElementsByTagName("iframe")[0].contentWindow;
      
		$("#play_video").on("click", function() {
			setTimeout(function(){
				  $(".video__thumbnail").hide()
			},220);
			my_video.postMessage('{"event": "command", "func": "playVideo", "args": ""}', "*");
			
		});
    
		var products = new Swiper("#works-slider", {
			  slidesPerView: "auto",
			  spaceBetween:20,
      		  pagination: {
				el: ".works-level__slider-counter",
				type: "fraction",
			  },
    	});

		 $(".works-level__slider-btn-prev").on('click',function(){
        products.slidePrev();
        
       
  		});
	   $(".works-level__slider-btn-next").on('click',function(){
			products.slideNext();
	  });  
    
});
	