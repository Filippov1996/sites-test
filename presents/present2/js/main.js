var _w_ = 1194;
var _h_ =  834;
var currentSlideIndex = -1;
var currentSlide = undefined;


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

let btn_hamburger =  document.querySelectorAll(".btn-hamburger")[0];
let list_presents =  document.querySelectorAll(".list-presents")[0];
let mp_btn =  document.querySelectorAll(".mp")[0];
let bp_btn =  document.querySelectorAll(".bp")[0];
let mp =  document.querySelectorAll(".main-present")[0];
let bp =  document.querySelectorAll(".backup-present")[0];


$(".btn-hamburger").on('tap',function(){
    
    $(".list-presents").toggleClass("show");
});



$(".mp").on('tap',function(){
     $(".backup-present").removeClass("show");
    $(".main-present").addClass("show");
     $(".list-presents").removeClass("show");
});


$(".bp").on('tap',function(){
    $(".main-present").removeClass("show");
    $(".backup-present").addClass("show");
     $(".list-presents").removeClass("show");
});












var count = 1;
var j=1;
var btn_popup;
var popup;
var slide_child;
var slide;
var prevCount;
var first_slideMP = document.querySelectorAll(".main-present .slide")[0];
var first_slideBP = document.querySelectorAll(".backup-present .slide")[0];
var all_slidesMP = document.querySelectorAll(".main-present .slide");
var all_slidesBP = document.querySelectorAll(".backup-present .slide");

var questions;

function show_firstSlide(){
        first_slideMP.style.display = 'block';
        first_slideBP.style.display = 'block';
}
show_firstSlide();

/*
document.addEventListener("touchstart",handleTouchStart,false);
document.addEventListener("touchmove",handleTouchMove,false);
let x1=null;
function handleTouchStart(event){
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
}


function handleTouchMove(event){
    if(!x1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    
   
    
    
    let xDiff = x2-x1;
    
    
    if(xDiff>0){        
        if(mp.classList.contains("show")){
             prevSlideMP(count);
        }
        if(bp.classList.contains("show")){
            prevSlideBP(j);
        }
    
    }else{
        if(mp.classList.contains("show")){
           nextSlideMP(count);
        }
        if(bp.classList.contains("show")){
            nextSlideBP(j);
        }
    
    }
    x1=null;
    
}
*/


let swipeStart;
let swipeStop;

$(document).on("swipe",function(e){
    swipeStart = e.swipestart.coords[0];
    swipeStop=   e.swipestop.coords[0];
    if(swipeStart>swipeStop){
       if($(".main-present").hasClass("show")){
           
           nextSlideMP()
       }
       if($(".backup-present").hasClass("show")){
           
           nextSlideBP()
       }
        
    }
    if(swipeStart<swipeStop){
        if($(".main-present").hasClass("show")){
           
           prevSlideMP()
       }
       if($(".backup-present").hasClass("show")){
           
           prevSlideBP()
       }
          
         
    }
});

$("#slide1 .next-slide").on("tap",function(){
    
   nextSlideMP();

});





$("#slide2 .btn-popup").on("tap",function(){
    console.log("sdd")
   $("#slide2 .popup").addClass("show"); 
    
});
$("#slide2 .popup .close-popup").on("tap",function(){
    
        $("#slide2 .popup").removeClass("show")
    
});

$("#slide3 .btn-popup").on("tap",function(){
    
   $("#slide3 .popup").addClass("show"); 
    
});


$("#slide3 .popup .close-popup").on("tap",function(){
    
        $("#slide3 .popup").removeClass("show")
    
});

$("#slide3 .btn2").on("tap",function(){
    
   $("#slide3 .popup2").addClass("show"); 
    
});

$("#slide3 .popup2 .close-popup").on("tap",function(){
    
        $("#slide3 .popup2").removeClass("show")
    
});
$("#slide4 .btn-popup").on("tap",function(){
    
   $("#slide4 .popup").addClass("show"); 
    
});

$("#slide4 .popup .close-popup").on("tap",function(){
    
        $("#slide4 .popup").removeClass("show")
    
});



let count_modal=0;
$("#slide4 .top-arrow").on("tap",function(){
        count_modal--;
   
        $("#slide4 .modal").eq(count_modal+1).fadeOut(500,function(){
            $("#slide4 .modal").eq(count_modal).fadeIn(500);
        });
         if(count_modal<2){
           $("#slide4 .bottom-arrow").fadeIn(500);
        }
        if(count_modal==0){
            $(this).fadeOut(500);
        }
});


$("#slide4 .bottom-arrow").on("tap",function(){
     count_modal++;
   
        $("#slide4 .modal").eq(count_modal-1).fadeOut(500,function(){
            $("#slide4 .modal").eq(count_modal).fadeIn(500);
        });
         if(count_modal>0){
            $("#slide4 .top-arrow").fadeIn(500);
        }
        if(count_modal==2){
            $(this).fadeOut(500);
        }
});



$("#slide5 .btn-popup").on("tap",function(){
    
   $("#slide5 .popup").addClass("show"); 
    
});
$("#slide5 .popup .close-popup").on("tap",function(){
    
        $("#slide5 .popup").removeClass("show")
    
});

$("#slide6 .btn-popup").on("tap",function(){
    
   $("#slide6 .popup").addClass("show"); 
    
});


$("#slide6 .popup .close-popup").on("tap",function(){
    
   $("#slide6 .popup").removeClass("show")
    
});

$("#slide6 .btn2").on("tap",function(){
    
   $("#slide6 .popup2").addClass("show"); 
    
});

$("#slide6 .popup2 .close-popup").on("tap",function(){
    
   $("#slide6 .popup2").removeClass("show")
    
});



$("#slideBackup2 .btn-popup").on("tap",function(){
    
   $("#slideBackup2 .popup").addClass("show"); 
    
});
$("#slideBackup2 .popup .close-popup").on("tap",function(){
    
    $("#slideBackup2 .popup").removeClass("show");
    
});






$("#slideBackup3 .btn-popup").on("tap",function(){
    
   $("#slideBackup3 .popup").addClass("show"); 
    
});
$("#slideBackup3 .popup .close-popup").on("tap",function(){
    
    $("#slideBackup3 .popup").removeClass("show");
    
});




$("#slideBackup4 .btn-popup").on("tap",function(){
    
   $("#slideBackup4 .popup").addClass("show"); 
    
});

$("#slideBackup4 .popup .close-popup").on("tap",function(){
    
    $("#slideBackup4 .popup").removeClass("show");
    
});





function nextSlideMP(){
    
       
        if(count<=all_slidesMP.length-1){
                        count++;
                       slide =  document.getElementById('slide'+count);     
                       slide.style.display = 'block';
                       slide.previousElementSibling.style.display = 'none';
                        
                        
              }
}


function prevSlideMP(){
    
       
        if(count>1){
    
            
            count--;
            slide =  document.getElementById('slide'+count);     
            slide.style.display = 'block';
            slide.nextElementSibling.style.display = 'none';
            
      }
}






function nextSlideBP(){
    
       
        if(j<=all_slidesBP.length-1){
                       j++;
                       slide =  document.getElementById('slideBackup'+j);     
                       slide.style.display = 'block';
                       slide.previousElementSibling.style.display = 'none';
            
                    
              }
}


function prevSlideBP(){
    
       
        if(j>1){
    
            
            j--;
            slide =  document.getElementById('slideBackup'+j);     
            slide.style.display = 'block';
            slide.nextElementSibling.style.display = 'none';
            
            console.log(count)
      }
}
























