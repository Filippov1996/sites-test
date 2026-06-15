
const swiper = new Swiper('.mySwiper', {
	loop: true,

	pagination: {
         clickable: true,
		el: '.swiper-pagination',
		type: 'bullets',
	  },

	  
	navigation: {
		nextEl: '.reviews__swiper-button-next',
		prevEl: '.reviews__swiper-button-prev',
	  },
  });


const swiper2 = new Swiper('.mySwiper2', {
	centeredSlides: true,
    loop: true,
	breakpoints: {
		200: {
			slidesPerView: 1,
			spaceBetween: 10,
			pagination: {
                clickable: true,
				enabled: true,
				el: '.swiper-pagination',
				type: 'bullets',
			  },
		},
		576: {
			pagination: {
			  enabled: false
			},
		},
		768: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
	},
	navigation: {
		nextEl: '.photos__swiper-button-next',
		prevEl: '.photos__swiper-button-prev',
	  },
});
