var is_dev = window.location.href.indexOf("file://") == 0;
var _w_ = 960;
var _h_ = 540;
var currentSlide = undefined;
var goToPrevSlide = document.getElementById("goToPrevSlide");
var goToNextSlide = document.getElementById("goToNextSlide");






window.addEventListener("resize", resize);
// window.addEventListener("keyup", switchSlideFromKeyboard);
window.addEventListener("resize", resize);

resize();
function resize(){
    var scale = 1;			 
    var scale = Math.min(window.innerWidth/_w_,window.innerHeight/_h_);
    var display = document.getElementById("display");
    display.style.top = (window.innerHeight-_h_*scale)*0.5 + "px";
    display.style.left = (window.innerWidth-_w_*scale)*0.5 + "px";
    display.style.transform = 'scale(' + scale + ','+scale +')';
          
}			

let count = 1;
var j=1;
var slide;
var prevCount;
var first_slide = document.querySelectorAll(".slide")[0];
var all_slides = document.querySelectorAll(".slide");
var questions;
var play = document.getElementById("play-present");

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
                    
                            j=0;
                            goToNextSlide.style.display="none";
                        
                            questions = slide.querySelectorAll('.question-filed>.item');
                           
                            questions.forEach(function(item){
                        
                        
                        
                                     if(item.classList.contains("true_answer")){


                                          goToNextSlide.style.display="block";
                                          j=1;
                                         
                                      }else{  

                                                  if(item.classList.contains("ch") && item.getAttribute("data-question")=='true'){  
													  		
                                                            item.classList.add("true_answer");
													  		for(let i=0; i<questions.length; i++){
																	 if(questions[i].getAttribute("data-question")=='false'){

																		 questions[i].classList.add("false_answer");
																	 }
														  
															}
                                                            goToNextSlide.style.display="block";
                                                            j=1;
                                                      

                                                  }else if(item.classList.contains("ch") && item.getAttribute("data-question")=='false'){
													  for(let i=0; i<questions.length; i++){
														 if(questions[i].getAttribute("data-question")=='false'){
															 
															 questions[i].classList.add("false_answer");
															 questions[i].classList.add("no-active");
														 }
														  
													  }
													  
													  
													  
													  //item.classList.add("false_answer");
													 
												
                                                      questions.forEach(function(elem){
                                                              if(elem.getAttribute("data-question")=='true'){
                                                                        j=1;
                                                                        elem.classList.add("true_answer");
																        elem.classList.remove("no-active");
                                                                        goToNextSlide.style.display="block";

                                                                } 

                                                          });

                                                    }

                                      }

                        
                                   item.addEventListener('click', (e) =>{
                                         questions.forEach(el=>{ 
                                             el.classList.remove('ch'); 
											 el.classList.add('no-active'); 
											
                                         });
									   	 
									   	 
									   
                                         item.classList.add('ch');
									     item.classList.remove('no-active');
									   	 let bullit = item.querySelector(".dot").children;
									   	 	
									     bullit[0].classList.add('bullit-active');
									   	 
									   
                                         goToNextSlide.style.display="block";
                                    });
                        			
                        
                            });
                       
                        }
              
              }
    
         if(count>1){
             goToPrevSlide.style.display="block";
         }
         if(count>=23){
             goToNextSlide.style.display="none";
         }
       
});

goToPrevSlide.addEventListener('click',function(){
        
    
      if(count>0){
    
            if(slide.classList.contains('question-block')){
               goToNextSlide.style.display="block";
                j=1;
                
            }
            count-=j;
            slide =  document.getElementById('slide'+count);     
            slide.style.display = 'block';
            slide.nextElementSibling.style.display = 'none';
          
      }
    
    if(count==1){
         
         goToPrevSlide.style.display="none";
		
        
    }
    if(count<23 && count!=1){
        
        goToNextSlide.style.display="block";
    }
    
});

