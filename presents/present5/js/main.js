var _w_ = 960;
var _h_ = 540;
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



var count = 1;
var j=1;
var slide;
var prevCount;
var first_slide = document.querySelectorAll(".slide")[0];
var all_slides = document.querySelectorAll(".slide");
var questions;
var btn_reply;
var btn_next = document.getElementById("btnNext");
var point;
var modal;
var last_btn; 


function show_firstSlide(){
        first_slide.style.display = 'block';
        if(count==1){
            goToPrevSlide.style.display="none";
        }
}
show_firstSlide();




goToNextSlide.addEventListener('click',function(){
    
            if(count<=all_slides.length-1){
                         count+=j;
                       slide =  document.getElementById('slide'+count);     
                       slide.style.display = 'block';
                       slide.previousElementSibling.style.display = 'none';
                       console.log(count); 
                    
                
                        if(slide.classList.contains('question-block')){
                            
                             j=0;
                            goToNextSlide.style.display="none";
                        
                            questions = slide.querySelectorAll('.question-filed>.item');
                           
                            questions.forEach(function(item,index){
                                
                                if(item.classList.contains("true_answer")){


                                          goToNextSlide.style.display="block";
                                          j=1;
                                          console.log("true_answer"+count);
                                      }else{
                                
                                          if(item.classList.contains("ch")){

                                              goToNextSlide.style.display="block";
                                              j=1;
                                          }  
                                          if(item.classList.contains("true_answer")){
                                                goToNextSlide.style.display="block";
                                                 j=1;
                                                console.log("true_answer"+count);
                                           }else{  

                                                  if(item.classList.contains("ch") && item.getAttribute("data-question")=='true'){  
													  		item.querySelectorAll(".text-block")[0].classList.remove('text');
                                                            item.classList.add("true_answer");
													  		for(let i=0; i<questions.length; i++){
                                                                     if(questions[i].getAttribute("data-question")=='true'){
                                                                         
                                                                         questions[i].classList.add("true_answer"+(i+1));
                                                                     }
                                                                
                                                                
                                                                
																	 if(questions[i].getAttribute("data-question")=='false'){

																		 questions[i].classList.add("false_answer"+(i+1));
																	 }
														              questions[i].classList.remove("ch");
															}
                                                            goToNextSlide.style.display="block";
                                                            j=1;
                                                      

                                                  }else if(item.classList.contains("ch") && item.getAttribute("data-question")=='false'){
                                                       item.classList.add("false_answer");
													  for(let i=0; i<questions.length; i++){
														 if(questions[i].getAttribute("data-question")=='false'){
															 
															 questions[i].classList.add("false_answer"+(i+1));
														 }
                                                          if(questions[i].getAttribute("data-question")=='true'){
                                                                         
                                                                         questions[i].classList.add("true_answer"+(i+1));
                                                                     }
                                                          questions[i].classList.remove("ch");
														  
													  }
													  
													  
													  
													  //item.classList.add("false_answer");
													 
												
                                                      questions.forEach(function(elem){
                                                              if(elem.getAttribute("data-question")=='true'){
                                                                        j=1;
                                                                        elem.classList.add("true_answer");
                                                                        goToNextSlide.style.display="block";

                                                                } 

                                                          });

                                                    }

                                      }
                                          
                                     
                                      }
                                   item.addEventListener('click', (e) =>{
                                          console.log(index);
									   	 point  =  item.querySelectorAll(".radio div")[0];
                                         point.classList.add("radio-point")
                                         item.classList.add('ch');
                                       goToNextSlide.style.display="block";
                            
                                    });
                            
                                                   
                            });
                       
                        }
                       if(slide.classList.contains('next-btn')){
                                btn_next.addEventListener("click",function(){
                                    
                                                 count+=j;
                                                slide =  document.getElementById('slide'+count);     
                                                slide.style.display = 'block';
                                                slide.previousElementSibling.style.display = 'none';
                                });
                                                  
                           
                       }
                        
              }
    
         if(count>1){
             goToPrevSlide.style.display="block";
         }
         if(count>=26){
             goToNextSlide.style.display="none";

         }
       
});

goToPrevSlide.addEventListener('click',function(){
        
    
      if(count>0){
    
            if(slide.classList.contains('question-block')){
               goToNextSlide.style.display="block";
                j=1;
                questions = slide.querySelectorAll('.question-filed>.item');
              
            }
            count-=j;
            slide =  document.getElementById('slide'+count);     
            slide.style.display = 'block';
            slide.nextElementSibling.style.display = 'none';
          
      }
    
    if(count==1){
        
         goToPrevSlide.style.display="none";
        
    }
    if(count<26 && count!=1){
        goToNextSlide.style.display="block";
    }
    
});
