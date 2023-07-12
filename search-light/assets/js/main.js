$(document).ready(function(){
	

    
    
    
        var chart = 
'<svg viewBox="0 0 32 32"><circle class="circle" r="16" cx="16" cy="16" style="stroke-dasharray: 0 100" /></svg>';
$('.graf--chart').html(chart);
var chart = $('.diograms .pie .graf--chart circle');
var d1=  $('.diograms  .diaogram1 .pie .graf--chart circle');
var d2=  $('.diograms  .diaogram2 .pie .graf--chart circle');   
var d3=  $('.diograms  .diaogram3 .pie .graf--chart circle');
var d4=  $('.diograms  .diaogram4 .pie .graf--chart circle');
var block  =  $(".pie").position().top;
var control =true;
    
$(window).scroll(function(){
    
    
    
    
    
    
	var wt = $(window).scrollTop();
	var wh = $(window).height();
    
    if(wt>0){
       
        
        if($('header  .desc-menu').is(":visible")){
             $('header  .desc-menu').addClass("fixed");
        }
        if($('.menu-mob').is(":visible")){
             $('.menu-mob').addClass("fixed");
        }
        
    }else if(wt==0){
        if($('header  .desc-menu').is(":visible")){
             $('header  .desc-menu').removeClass("fixed");
        }
        if($('.menu-mob').is(":visible")){
             $('.menu-mob').removeClass("fixed");
        }
    }
    
	var et = $('#possibility .diograms').offset().top;
	var eh = $('#possibility .diograms').outerHeight();
	var dh = $(document).height();   
	if (wt + wh >= et+500){
		 
          d1.addClass("anim-chart1");
          d2.addClass("anim-chart2");
          d3.addClass("anim-chart3");  
          d4.addClass("anim-chart4");  
                if(control){
                    var count1=0;
                    var count2=0;
                    var count3=0;
                    var count4=0;
                    control =false;
                }
            $("#possibility  .diaogram-item .num-val").each(function(i){
    
                            if(i==0){
                                  setInterval(function(){
                                        if(count1<34){
                                                count1++;
                                                $("#possibility  .diaogram-item .num-val").eq(i).text(count1+"%");

                                        }
                                },20);
                      
                                
                            }        
                            
                            if(i==1){
                                  setInterval(function(){
                                        if(count2<41){
                                                count2++;
                                                $("#possibility  .diaogram-item .num-val").eq(i).text(count2+"%");

                                        }
                                },20);
                      
                                
                            }         
                            if(i==2){
                                  setInterval(function(){
                                        if(count3<75){
                                                count3++;
                                                $("#possibility  .diaogram-item .num-val").eq(i).text(count3+"%");

                                        }
                                },10);
                                
                                
                            } 
                            if(i==3){
                                  setInterval(function(){
                                        if(count4<62){
                                                count4++;
                                                $("#possibility  .diaogram-item .num-val").eq(i).text(count4+"%");

                                        }
                                },10);
                                
                                
                            } 
                
                });
	}
});    
    
    $(window).scroll(function(){
        let win = $(window).scrollTop() + $(window).height();
        
    //console.log(win+"ff"+(block+$(".pie").height()));
        
        if(win >=(block+$(".pie").height())){
         
            
        }
    });
    
    
    
    
    
    
    
      
    wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: false,
                    live: true
                });
	
	
	wow.init();
    
    
    
    
    
    
    
    var res = 0;

    $("#test .block-q1 .item .answer p").each(function(i){
        $(this).on('click',function(){
            $(this).toggleClass("show");
            if(i==0){
                
                if($(this).hasClass("show")){
                    res+=10
                    console.log(res)
                }else{
                     res-=10;
                     console.log(res)
                }
            }
        });
    });
    
    
    
      $("#test .block-q2 .item .answer p").each(function(i){
        $(this).on('click',function(){
            $(this).toggleClass("show");
            if(i==0){
                
                if($(this).hasClass("show")){
                    res+=1
                    console.log(res)
                }else{
                     res-=1;
                     console.log(res)
                }
            }
             if(i==1){
                
                if($(this).hasClass("show")){
                    res+=1
                    console.log(res)
                }else{
                     res-=1;
                     console.log(res)
                }
            }    
             if(i==2){
                
                if($(this).hasClass("show")){
                    res+=1
                    console.log(res)
                }else{
                     res-=1;
                     console.log(res)
                }
            } 
             if(i==3){
                
                if($(this).hasClass("show")){
                    res+=1
                    console.log(res)
                }else{
                     res-=1;
                     console.log(res)
                }
            } 
        });
    });
    
    
    
    
    
    
    
    $("#test .btn").on('click',function(e){
            e.preventDefault();
            if(res>=10){
                   
                     $("#test .false-ans1").removeClass("fadeIn");
                     $("#test .false-ans2").removeClass("fadeIn");
                    $("#test .true-ans").addClass("fadeIn");
                        
                 
            }
            if(res<10 && res>0){
                
                 $("#test .true-ans").removeClass("fadeIn");
                 $("#test .false-ans2").removeClass("fadeIn");
                 $("#test .false-ans1").addClass("fadeIn");
                 
            }
            if(res==0 ){
                 
                 $("#test .true-ans").removeClass("fadeIn");
                 $("#test .false-ans1").removeClass("fadeIn");
                 $("#test .false-ans2").addClass("fadeIn");
                
            }
    
    });
    
    
    
       $("#dystrophy .btn").on('click',function(e){
        e.preventDefault();
        $(".hide").eq(0).slideDown(1000);
    
        let elem = $(".hide").eq(0).offset().top
        $("html,body").animate({
                        scrollTop:elem
            },1000);
        
        
    });
    
    
    
    $("#suspect .btn").on('click',function(e){
        
       e.preventDefault();
        $(".hide").eq(1).slideDown(1000);
        let elem = $(".hide").eq(1).offset().top
        $("html,body").animate({
                        scrollTop:elem
            },1000);
        
        
    });
    
    
    $("#possibility .btn").on('click',function(e){
        e.preventDefault();
        $(".hide").eq(2).slideDown(1000);
        let elem = $(".hide").eq(2).offset().top
        $("html,body").animate({
                        scrollTop:elem
            },1000);
        
        
    });
    

      $("#clinic .btn").on('click',function(e){
         e.preventDefault();
        $("#clinic .shema").slideDown(1000);
        let elem = $("#clinic .shema").offset().top
        $("html,body").animate({
                        scrollTop:elem
            },1000);
        
        
    });
    
    
       $("#contact .btn").on('click',function(e){
         e.preventDefault();
        $("#contact .note-block").slideDown(1000);
        let elem = $("#contact .note-block").offset().top
        $("html,body").animate({
                        scrollTop:elem
            },1000);
        
        
         });
    
    
    
    
      var href;
      var pos;
     $(".desc-menu .menu-list li a").each(function(){
         
         $(this).on("click",function(e){
             e.preventDefault();
             href=$(this).attr("href");
             pos =$(href).offset().top;
             $("html,body").animate({
                        scrollTop:pos 
            },1000);
         });
         
     }); 
    
    $(".list-menu-mob li a").each(function(){
         
         $(this).on("click",function(e){
             e.preventDefault();
             href=$(this).attr("href");
             pos =$(href).offset().top;
             $("html,body").animate({
                        scrollTop:pos 
            },1000);
         });
         
     }); 
    
    
   
         
   $('.menu-mob a.btn').on("click",function(e){
             e.preventDefault();
             href=$(this).attr("href");
             pos=$(href).offset().top;
             $("html,body").animate({
                        scrollTop:pos 
            },1000);
    });
        
    
    
    
    
    
     $(".btn-hamburger").on("click",function(){
         $("#menu-list-mob").animate({
             left:0+"px"
         },500)
         
     });
    
    
     $("#menu-list-mob  i").on("click",function(){
         $("#menu-list-mob").animate({
             left:-300+"px"
         },500)
         
     });
    
    
    
    
    
    
    $(".btn-hamburger").on("click",function(){
        $('.btn-hamburger span').eq(0).toggleClass("anim1");
        $('.btn-hamburger span').eq(1).toggleClass("anim2"); 
        $('.btn-hamburger span').eq(2).toggleClass("anim3"); 
        $("header .menu-mob .list-menu-mob").slideToggle(500);
    });
    
    

    
    $(".btn-list1").on("click",function(){
        $(".list1 ul").slideToggle(500);
        $(this).toggleClass("move-btn");
    });
    $(".btn-list2").on("click",function(){
         $(".list2 ul").slideToggle(500);
        $(this).toggleClass("move-btn");
        
    });
    
    
    
    
    $(".list-clinic li .btn-info").each(function(){
        $(this).on("click",function(){
            
            $(this).prev(".dop-info").addClass("show-info")
            
             $(this).hide();
            
        })
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});