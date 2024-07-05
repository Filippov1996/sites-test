 $(document).ready(function(){
	 
	 var sliderNewes = new Swiper(".news__slider", {
      slidesPerView: 3,
      spaceBetween: 20,
		loop:true,
      freeMode: true
    });
	 
	 
	 $(".btn-next").on("click",function(){
		 sliderNewes.slideNext();
	 })
	 
	 
 });