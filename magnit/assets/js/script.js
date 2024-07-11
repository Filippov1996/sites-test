 $(document).ready(function(){
	 
	 var sliderNewes = new Swiper(".news__slider", {
       spaceBetween: 20,
	   loop:true,
       freeMode: true,
	   breakpoints: {
		     0: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				},
				570: {
				  slidesPerView: 2,
				  spaceBetween: 20,
				},
				865: {
				  slidesPerView: 3,
				  spaceBetween: 40,
				}
				
	   }
    });
	 
	 
	 $(".btn-next").on("click",function(){
		 sliderNewes.slideNext();
	 })
	 
	 
 });