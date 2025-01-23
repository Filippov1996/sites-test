var _w_ = 1024;
var _h_ = 768;
var currentSlideIndex = -1;
var currentSlide = undefined;
var goToPrevSlide = document.getElementById("goToPrevSlide");
var goToNextSlide = document.getElementById("goToNextSlide");
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
    
        "images/slide1/header.png",
		"images/slide1/round-outer.png",
		"images/slide1/round-inner.png"
		
    ],
    [
		"images/slide2/background.png",
        "images/slide2/header.png",
		"images/slide2/label.png",
		"images/slide2/round1.png",
		"images/slide2/round2.png",
		"images/slide2/round3.png",
		"images/slide2/round4.png",
		"images/slide2/woman.png",
		"images/slide2/item1.png",
		"images/slide2/item2.png",
		"images/slide2/item3.png",
		"images/slide2/item4.png"
    ],
    [
        "images/slide3/header.png",
		"images/slide3/item1.png",
		"images/slide3/item2.png"		
    ],
    [
        "images/slide4/header.png",
        "images/slide4/age.png",
		"images/slide4/col1-item1.png",
		"images/slide4/col1-item2.png",
		"images/slide4/col1-item3.png",
		"images/slide4/root.png",
		"images/slide4/icon1.png",
		"images/slide4/col2-item1.png",
		"images/slide4/icon2.png",
		"images/slide4/col2-item2.png",
		"images/slide4/col2-item3.png",
	    "images/slide4/col2-item4.png",
		"images/slide4/icon3.png",
		"images/slide4/col2-item5.png"
    ],
    [
            "images/slide5/header.png",
			"images/slide5/q1.png",
			"images/slide5/q2.png",
			"images/slide5/true-answer.png",
			"images/slide5/false-answer.png"
    ],
    [
       
	      "images/slide6/header.png",
	      "images/slide6/label.png",
		  "images/slide6/icon1.png",
		  "images/slide6/icon2.png",
		  "images/slide6/title1.png",
		  "images/slide6/item1.png",
		  "images/slide6/item2.png",
		  "images/slide6/item3.png",
		  "images/slide6/item4.png",
		  "images/slide6/title2.png"
    ],
    [
        "images/slide7/header.png",
		"images/slide7/q1.png",
		"images/slide7/q2.png",
		"images/slide7/true-answer.png",
		"images/slide7/false-answer.png"
    ],
    [
      		"images/slide8/header.png",
	  		"images/slide8/label.png",
	 		"images/slide8/icon1.png",
			"images/slide8/icon2.png",
			"images/slide8/title1.png",
			"images/slide8/item1.png",
			"images/slide8/item2.png",
			"images/slide8/item3.png",
			"images/slide8/item4.png",
			"images/slide8/item5.png",
			"images/slide8/item6.png",
			"images/slide8/title2.png"
    ],
    [
      	 "images/slide9/header.png",
		 "images/slide9/q1.png",
		 "images/slide9/q2.png",
		 "images/slide9/true-answer.png",
		 "images/slide9/false-answer.png"
    ],
    [
        "images/slide10/header.png",
		"images/slide10/label.png",
		"images/slide10/bor1.png",
		"images/slide10/woman.png",
		"images/slide10/bor2.png"
    ],
    [
      "images/slide11/bg.png",
	  "images/slide11/header.png",
	  "images/slide11/item1.png",
	  "images/slide11/item2.png",
	  "images/slide11/item3.png",
	   "images/slide11/hand.png"
    ],
	[
      "images/slide12/header.png",
	  "images/slide12/q1.png",
	 "images/slide12/q2.png",
	 "images/slide12/true-answer.png",
	 "images/slide12/false-answer.png"
		
    ],
	[
      	"images/slide13/header.png"
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

var goToPrevSlide = document.getElementById("goToPrevSlide");
var goToNextSlide = document.getElementById("goToNextSlide");

let count = 1;
let j=1;
let slide;
let prevCount;
let answer;
let Class;
let first_slide = document.querySelectorAll(".slide")[0];
let all_slides = document.querySelectorAll(".slide");
let questions;


function show_firstSlide(){
        first_slide.style.display = 'block';
        
            goToPrevSlide.style.display="none";
			
}
show_firstSlide();



goToNextSlide.addEventListener('click',function(){
    
            if(count<=all_slides.length-1){
                         count+=j;
                       	 slide =  document.getElementById('slide'+count);     
                         slide.style.display = 'block';
                         slide.previousElementSibling.style.display = 'none';
                       	  if(slide.classList.contains('question-block')){
                   			goToNextSlide.style.display="none";		
							  
							  questions = slide.querySelectorAll('.question-filed>.item')
							  
							  
							  questions.forEach(function(item,index,elems){
								  if(item.classList.contains('ch-answer')){
									  
									  goToNextSlide.style.display="block";	
								  }else{
									  goToNextSlide.style.display="none";	
								  }
								  item.addEventListener('click',function(){
									
									  answer = slide.querySelectorAll(".answer");
									 
									  
									  for(let i=0; i<elems.length;i++){
										  	
										   elems[i].classList.remove('ch-answer');
										  
										  
									  }
									  if(item.getAttribute("data-question")){
										  
										  data_Answer = item.getAttribute("data-question");
										  if(data_Answer=='true'){
											  elems.forEach(function(i,ind,data){
												  
												  i.classList.remove("false_answer");
												  
												  
											  });
											  
											
											  
												if(item.classList.contains('true_block')){
													 elems.forEach(function(i,ind,data){
										
												  			i.classList.remove("true_answer");
											  		});
													 if(index<1){
														 
														 answer[index].style.display="block";
														 answer[1].style.display="none";
													 }else if(index>0){
														 answer[index].style.display="block";
														 answer[0].style.display="none";
													 }
													
													console.log(index);
												}else{
													answer[index].style.display="block";
													answer[1].style.display="none";
												}
											  
											  item.classList.add("true_answer")
											  
						
											  
										  }
										  if(data_Answer=='false'){
											   elems.forEach(function(i,ind,data){
												  
												  i.classList.remove("true_answer");
												  
											  });
											  item.classList.add("false_answer")
									          answer[0].style.display="none";
											  answer[1].style.display="block";
											 
										  }
									  }
									   item.classList.add('ch-answer');
									  goToNextSlide.style.display="block";
								  });
								  
							  });
							  
							 	  
							  
				}

			
              }
    
         if(count>1){
             goToPrevSlide.style.display="block";
			 
			 
			 goToPrevSlide.classList.add("PrevP");
			 goToNextSlide.classList.remove("PrevW");
			 
			 
			 goToNextSlide.classList.add("NextP");
			 goToNextSlide.classList.remove("NextW");
			 
         }
         if(count>=13){
             goToNextSlide.style.display="none";
         }
      
});

goToPrevSlide.addEventListener('click',function(){
        
    
      if(count>0){
    
            if(slide.classList.contains('question-block')){
				
				
               goToNextSlide.style.display="block";
			
            }
		  	
            count-=j;
            slide =  document.getElementById('slide'+count);     
            slide.style.display = 'block';
            slide.nextElementSibling.style.display = 'none';
          
      }
    
    if(count==1){
         
         goToPrevSlide.style.display="none";
		
		 goToPrevSlide.classList.add("PrevW");
		 goToNextSlide.classList.remove("PrevP");
			 
			 
		goToNextSlide.classList.add("NextW");
		goToNextSlide.classList.remove("NextP");	
        
    }
    if(count<13 && count!=1){
        
        goToNextSlide.style.display="block";
    }
    
});





