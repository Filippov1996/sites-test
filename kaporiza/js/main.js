var _w_ = 1024;
var _h_ = 768;
var currentSlideIndex = -1;
var currentSlide = undefined;
var slideMap = [];
/*var slides = [                        
        { slidename: "slide1", element: document.getElementById("slide1"), show: true},
        { slidename: "slide2", element: document.getElementById("slide2"), show: true},
        { slidename: "slide3", element: document.getElementById("slide3"), show: true},
        { slidename: "slide4", element: document.getElementById("slide4"), show: true},
        { slidename: "slide5", element: document.getElementById("slide5"), show: true},
        { slidename: "slide6", element: document.getElementById("slide6"), show: true},
        { slidename: "slide7", element: document.getElementById("slide7"), show: true},
        { slidename: "slide8", element: document.getElementById("slide8"), show: true},
        { slidename: "slide9", element: document.getElementById("slide9"), show: true},
        { slidename: "slide10", element: document.getElementById("slide10"), show: true},
        { slidename: "slide11", element: document.getElementById("slide11"), show: true},
        { slidename: "slide12", element: document.getElementById("slide12"), show: true},
        { slidename: "slide13", element: document.getElementById("slide13"), show: true}
];
*/
var lazy_assets = [
    [
    
        "images/shared/goToNextSlide.png",
        "images/shared/goToPrevSlide.png",

	
    ],
    [
        "images/slide1/man1.png",
		"images/slide1/label1.png",
        "images/slide1/title.png",
        "images/slide1/label2.png",
        "images/slide1/label3.png",
    ],
    [
      
	   	"images/slide2/border.png",
        "images/slide2/man.png",
	   	"images/slide2/label1.png",
	    "images/slide2/label2.png",
		"images/slide2/label3.png",
		"images/slide2/label4.png",
		"images/slide2/label5.png",
		"images/slide2/label6.png",
		"images/slide2/label7.png"
		
    ],
    [
		  	"images/slide3/border.png",
	   		"images/slide3/label1.png",
	    	"images/slide3/label2.png",
			"images/slide3/label3.png",
			"images/slide3/label4.png",
			"images/slide3/label5.png"
    ],
    [
            "images/slide4/border.png",
	   		"images/slide4/label1.png",
	    	"images/slide4/label2.png",
			"images/slide4/label3.png"
    ],
    [
			"images/slide5/border.png",
	   		"images/slide5/label1.png",
	    	"images/slide5/label2.png",
			"images/slide5/label3.png"
    ],
    [
       
	   	"images/slide6/border.png",
        "images/slide6/title.png",
	   	"images/slide6/label1.png",
	    "images/slide6/label2.png",
		"images/slide6/label3.png",
		"images/slide6/label4.png",
		"images/slide6/label5.png",
		"images/slide6/label6.png",
		"images/slide6/label7.png",
		"images/slide6/label8.png",
		"images/slide6/label9.png"
    ],
    [
      	"images/slide7/border.png",
        "images/slide7/title.png",
	   	"images/slide7/label1.png",
	    "images/slide7/label2.png",
		"images/slide7/label3.png",
		"images/slide7/label4.png",
		"images/slide7/label5.png",
		"images/slide7/label6.png"
    ],
    [
		"images/slide8/border.png",
        "images/slide8/bg-image.png",
		"images/slide8/title.png",
	   	"images/slide8/label1.png",
	    "images/slide8/label2.png",
		"images/slide8/label3.png",
		"images/slide8/label4.png"
		
    ],
    [
        "images/slide9/border.png",
        "images/slide9/title.png",
	   	"images/slide9/label1.png",
	    "images/slide9/label2.png",
		"images/slide9/label3.png",
		"images/slide9/label4.png",
		"images/slide9/photo.png"
    ],
    [
         "images/slide10/border.png",
         "images/slide10/title.png",
	   	 "images/slide10/label1.png",
	     "images/slide10/label2.png",
		 "images/slide10/label3.png",
		 "images/slide10/label4.png",
		 "images/slide10/photo.jpg"
    ],
	[
        "images/slide11/border.png",
        "images/slide11/bg-image.png",
		"images/slide11/title.png",
	   	"images/slide11/label1.png",
	    "images/slide11/label2.png",
		"images/slide11/label3.png"
    ],
	[
         "images/slide12/border.png",
         "images/slide12/title.png",
	   	 "images/slide12/label1.png",
	     "images/slide12/label2.png",
		 "images/slide12/label3.png"
		
    ],
	[
         "images/slide13/border.png",
         "images/slide13/title.png",
	   	 "images/slide13/label1.png",
	     "images/slide13/label2.png",
		 "images/slide13/label3.png"
    ],
	[
		 "images/slide14/border.png",
         "images/slide14/title.png",
	   	 "images/slide14/label1.png",
	     "images/slide14/label2.png",
		 "images/slide14/photo.jpg"
	],
    [
        "images/slide15/border.png",
        "images/slide15/title.png",
	   	"images/slide15/label1.png",
	    "images/slide15/label2.png",
		"images/slide15/label3.png",
		"images/slide15/label4.png",
		"images/slide15/label5.png",
		"images/slide15/label6.png",
		"images/slide15/line1.png",
		"images/slide15/line2.png",
		"images/slide15/line3.png",
		"images/slide15/line4.png",
		"images/slide15/photo.png"
    ]
    [
            "images/slide16/border.png",
        	"images/slide16/title.png",
	   		"images/slide16/label1.png",
	    	"images/slide16/label2.png",
			"images/slide16/photo.png"
      ],
       [
		 	"images/slide17/border.png",
        	"images/slide17/title.png",
	   		"images/slide17/label1.png",
	    	"images/slide17/label2.png",
		   	"images/slide17/label3.png",
			"images/slide17/photo.jpg"
	],
    [
            "images/slide18/border.png",
        	"images/slide18/title.png",
	   		"images/slide18/label1.png",
	    	"images/slide18/label2.png",
		   	"images/slide18/photo1.jpg",
			"images/slide18/photo2.jpg"
     ],
     [
            "images/slide19/border.png",
        	"images/slide19/title.png",
	   		"images/slide19/label1.png",
	    	"images/slide19/label2.png",
		 	"images/slide19/label3.png",
		 	"images/slide19/label4.png",
		   	"images/slide19/photo1.jpg",
			"images/slide19/photo2.jpg"
        ],
    [
          	"images/slide20/border.png",
        	"images/slide20/title.png",
	   		"images/slide20/label1.png",
	    	"images/slide20/label2.png",
		   	"images/slide20/label3.png",
			"images/slide20/photo.jpg"
        ],
      [
            "images/slide21/border.png",
        	"images/slide21/title.png",
	   		"images/slide21/label1.png",
	    	"images/slide21/label2.png",
			"images/slide21/photo.png"
			
        ],
        [
            "images/slide22/border.png",
        	"images/slide22/title.png",
	   		"images/slide22/label1.png",
	    	"images/slide22/label2.png",
			"images/slide22/photo.png"
        ],
         [
          
            "images/slide23/border.png",
        	"images/slide23/title.png",
	   		"images/slide23/label1.png",
	    	"images/slide23/label2.png",
		 	"images/slide23/label3.png",
		 	"images/slide23/label4.png",
		   	"images/slide23/label5.png",
			"images/slide23/photo2.jpg"
        ],
        [
            "images/slide24/border.png",
        	"images/slide24/title.png",
			"images/slide24/title2.png",
	   		"images/slide24/label1.png",
	    	"images/slide24/label2.png",
			"images/slide24/bg-image.png"
        ],
		[
            "images/slide25/border.png",
        	"images/slide25/title.png",
			"images/slide25/title2.png",
			"images/slide25/title3.png",
	   		"images/slide25/label1.png",
	    	"images/slide25/label2.png",
			"images/slide25/label3.png",
			"images/slide25/label4.png",
			"images/slide25/label5.png",
			"images/slide25/label6.png",
			"images/slide25/label7.png",
			"images/slide25/label8.png",
			"images/slide25/arrow1.png"
        ],
		[
            "images/slide26/border.png",
        	"images/slide26/title.png",
			"images/slide26/shema.png",
	   		"images/slide26/label1.png"
        ],
		[
            "images/slide27/border.png",
        	"images/slide27/title.png",
	   		"images/slide27/label1.png",
	    	"images/slide27/label2.png",
			"images/slide27/label3.png",
			"images/slide27/label4.png",
			"images/slide27/label5.png",
			"images/slide27/label6.png",
			"images/slide27/label7.png"
			
        ],
		[
            "images/slide28/border.png",
        	"images/slide28/title.png",
			"images/slide28/shema.png",
	   		"images/slide28/label1.png"
        ],
		[
       		"images/slide29/border.png",
	   		"images/slide29/label.png"
        ],
		[
	   		"images/slide30/title.png"
        ]
];

function dopreload(){
    if(lazy_assets.length > 0) {
        var items = lazy_assets.shift();
        for(var i=0;i<items.length;i++) {
            var url = items[i];
            console.log(url);
            new Image().src = url;
        }
    }
}

dopreload();

var completed = false;



window.addEventListener("resize", resize);
window.addEventListener("resize", resize);

var scale = 1;
resize();

function resize(){
    //window.parent.document.documentElement.clientHeight
 var www = window.innerWidth;
 var hhh = window.innerHeight;
 scale = Math.min(www/_w_,hhh/_h_);
 var display = document.getElementById("display");
 display.style.top = (window.innerHeight-_h_*scale)*0.5 + "px";
 display.style.left = (www-_w_*scale)*0.5 + "px";
 display.style.transform = 'scale(' + scale + ','+scale +')';
 postSize();
}						

function postSize(){
    window.parent.postMessage(
        {
            
            data: {
                scale: scale, 
                width: _w_,
                height: _h_,
                scaledWidth: _w_ * scale,
                scaledHeight: _h_ * scale
            }
        }, 
        "*"
    ); 
}
/*btns slides*/
//slide1
var btn1_win_slide1 = document.getElementById("btn1_slide1");
var win_slide1 = document.getElementById("win_slide1");
var btn_packshoot = document.getElementById("show_packshoot");
var plachka_btn_slide1 = document.getElementById("plachka_btn_slide1");
var plachka_btn_slide1 = document.getElementById("plachka_btn_slide1");
var ws = document.getElementById("ws");
var wh = document.getElementById("wh");
var packshootSlide1 = document.getElementById("packshoot-slide1");
var label1 = document.getElementById("label1");

btn1_win_slide1.addEventListener("click",function(){
	    btn1_win_slide1.classList.toggle("close-oc");
		win_slide1.classList.toggle("show-win-move");
	  
});

btn_packshoot.addEventListener("click",function(){
	plachka_btn_slide1.classList.add("hide");
	win_slide1.classList.add("hide");
	ws.classList.add("hideImg");
	wh.classList.add("showImg");
	packshootSlide1.classList.add("showImg");
	label1.classList.add("show-label-move");
});
//slide2
var btn_list_books_slide2 = document.querySelectorAll("#slide2 .menu-icon3")[0];
var list_books_slide2 = document.querySelectorAll("#slide2 .list-books")[0];

btn_list_books_slide2.addEventListener('click',function(){
	
	list_books_slide2.style.display = "block";
});

list_books_slide2.addEventListener('click',function(){
	
	list_books_slide2.style.display = "none";
});


//slide3
var btn_list_books_slide3 = document.querySelectorAll("#slide3 .menu-icon3")[0];
var list_books_slide3 = document.querySelectorAll("#slide3 .list-books")[0];

btn_list_books_slide3.addEventListener('click',function(){
	
	list_books_slide3.style.display = "block";
});

list_books_slide3.addEventListener('click',function(){
	
	list_books_slide3.style.display = "none";
});

var btn1_tab_slide3 = document.getElementById("btn1-slide3");
var btn2_tab_slide3 = document.getElementById("btn2-slide3");

var tab1_slide3 = document.getElementById("tab1-slide3");
var tab2_slide3 = document.getElementById("tab2-slide3");
var teil = document.getElementById("teil");




btn1_tab_slide3.addEventListener("click",function(){
	    btn1_tab_slide3.classList.add("btn1-active");
	    btn2_tab_slide3.classList.remove("btn2-active");
	    teil.classList.remove('move-tail');
	    tab1_slide3.style.display = "block";
	    tab2_slide3.style.display = "none";
	   
});
btn2_tab_slide3.addEventListener("click",function(){
	    btn1_tab_slide3.classList.remove("btn1-active");
	    btn2_tab_slide3.classList.add("btn2-active");
	    teil.classList.add('move-tail');
		tab1_slide3.style.display = "none";
	    tab2_slide3.style.display = "block";
});



//slide4
var  btn_slide4 = document.getElementById("btn_slide4");
var  border_slide4 = document.getElementById("border_slide4");
var  lizzard_slide4 = document.getElementById("lizzard-slide4");
btn_slide4.addEventListener('click',function(){
	
	
	
	btn_slide4.classList.toggle('close-oc');
	border_slide4.classList.toggle('move-border');
	lizzard_slide4.classList.toggle('move-lizzard');
})

lizzard_slide4.addEventListener('click',function(){
	
	
	
	btn_slide4.classList.toggle('close-oc');
	border_slide4.classList.toggle('move-border');
	lizzard_slide4.classList.toggle('move-lizzard');
})

//slide5
var  tongue = document.getElementById("tongue");
var  lizzard_opcity = document.getElementById("lizzard-opcity");
var drag = document.getElementById("drag");
tongue.addEventListener('click',function(){
	drag.classList.add('hide-drag');
	tongue.classList.add('move-tongue');
	lizzard_opcity.classList.add('showLizzard');
})




var goToPrevSlide = document.getElementById("goToPrevSlide");
var goToNextSlide = document.getElementById("goToNextSlide");

var count = 1;
var j=0;
var slide;
var prevCount;
var first_slide = document.querySelectorAll(".slide")[0];
var all_slides = document.querySelectorAll(".slide");
var num ;


function show_firstSlide(){
        first_slide.style.display = 'block';
        if(count==1){
            goToPrevSlide.style.display="none";
            goToNextSlide.style.display="block";
        }
}
show_firstSlide();






goToNextSlide.addEventListener('click',function(){
    
            if(count<=all_slides.length-1){
                      count+=1;
                       slide =  document.getElementById('slide'+count);     
                       slide.style.display = 'block';
                       slide.previousElementSibling.style.display = 'none';
                      
                       
           }
       
         if(count>1){
             goToPrevSlide.style.display="block";
         }
	     if(count==4){
			setTimeout(function(){
			    lizzard_slide4.classList.remove('FADE_IN');
				lizzard_slide4.classList.remove('DELAY_400');
				lizzard_slide4.classList.remove('PLAY_500');
			},1700)	
		  }
		   if(count!=4){
			
			    lizzard_slide4.classList.add('FADE_IN');
				lizzard_slide4.classList.add('DELAY_400');
				lizzard_slide4.classList.add('PLAY_500');
				btn_slide4.classList.remove('close-oc');
				border_slide4.classList.remove('move-border');
				lizzard_slide4.classList.remove('move-lizzard'); 
		  }
	
         if(count>=5){
             goToNextSlide.style.display="none";
			 drag.classList.remove('hide-drag');
			 tongue.classList.remove('move-tongue');
			 lizzard_opcity.classList.remove('showLizzard');

         }
	
       
});

goToPrevSlide.addEventListener('click',function(){
        
    
      if(count>0){
            count-=1;
            slide =  document.getElementById('slide'+count);     
            slide.style.display = 'block';
            slide.nextElementSibling.style.display = 'none';         
      }
    if(count<5){
		 goToNextSlide.style.display="block";
	}
     if(count!=4){
			
			    lizzard_slide4.classList.add('FADE_IN');
				lizzard_slide4.classList.add('DELAY_400');
				lizzard_slide4.classList.add('PLAY_500');
				
		  }
	 if(count==4){
			setTimeout(function(){
			    lizzard_slide4.classList.remove('FADE_IN');
				lizzard_slide4.classList.remove('DELAY_400');
				lizzard_slide4.classList.remove('PLAY_500');
			},1700)	
		  }
    if(count==1){
        goToPrevSlide.style.display="none";
		btn1_win_slide1.classList.remove("close-oc");
		win_slide1.classList.remove("show-win-move");
		plachka_btn_slide1.classList.remove("hide");
		win_slide1.classList.remove("hide");
		ws.classList.remove("hideImg");
		wh.classList.remove("showImg");
		packshootSlide1.classList.remove("showImg");
		label1.classList.remove("show-label-move");
    }
    
});




var lastSlide = document.querySelectorAll(".lastSlide");

lastSlide.forEach((item) => {
 item.addEventListener('click',function(){
	  goToNextSlide.style.display="none";
			 drag.classList.remove('hide-drag');
			 tongue.classList.remove('move-tongue');
			 lizzard_opcity.classList.remove('showLizzard');
	 
	 
	 
	 
	 
	 
	   count=5;
	   slide =  document.querySelectorAll(".slide");
	   slide.forEach((item) => {
		   item.style.display ="none";
		   
	   });
       slide =  document.getElementById('slide'+count);
       slide.style.display = 'block';
	   goToNextSlide.style.display="none";
	   goToPrevSlide.style.display="block";
	 
	 
 });
})







var slide3 = document.querySelectorAll(".slide3");

slide3.forEach((item) => {
 item.addEventListener('click',function(){
	   count=3;
	   slide =  document.querySelectorAll(".slide");
	   slide.forEach((item) => {
		   item.style.display ="none";
		   
	   });
       slide =  document.getElementById('slide'+count);
       slide.style.display = 'block';
	   goToPrevSlide.style.display="block";
 });
})


var slide4 = document.querySelectorAll(".slide4");

slide4.forEach((item) => {
 item.addEventListener('click',function(){
	   count=4;
	   slide =  document.querySelectorAll(".slide");
	   slide.forEach((item) => {
		   item.style.display ="none";
		   
	   });
       slide =  document.getElementById('slide'+count);
       slide.style.display = 'block';
	   goToPrevSlide.style.display="block";
 });
})


var slide1 = document.querySelectorAll(".slide1");

slide1.forEach((item) => {
 item.addEventListener('click',function(){
	   count=1;
	   slide =  document.querySelectorAll(".slide");
	   slide.forEach((item) => {
		   item.style.display ="none";
		   
	   });
       slide =  document.getElementById('slide'+count);
       slide.style.display = 'block';
	   goToPrevSlide.style.display="none";
 });
})












