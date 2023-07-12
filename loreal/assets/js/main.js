$(document).ready(function(){	
    
	 $('#main-wrapper .banner').slick({
                          dots: true,
		 				  dotsClass: "custom-dots",
                          speed: 300,
                          slidesToShow: 1,
                          slidesToScroll: 1,
						  arrows : true
	 					});


    $('#main-wrapper .banner-mob').slick({
                          dots: false,
                          speed: 300,
                          slidesToShow: 1,
                          slidesToScroll: 1,
						  arrows : true
	 					});

    


    $(".custom-dots li button").text('')
    
 
    $.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
    
var day ,month ,year;
$(".calendar-win").datepicker({
	onSelect: function(dateText, inst) { 
        var date = $(this).datepicker('getDate');
         day  = date.getDate(),  
          month = date.getMonth() + 1,              
         year =  date.getFullYear();
            console.log(day + '-' + month + '-' + year);
    }
});    
    
    
    
    $(".training .tabs-control li").each(function(i){
        $(this).on('click',function(){
            
            $(".training .tabs-control li").removeClass('active');
            $(this).addClass('active');
             let  elemVis = $(".training .item:visible");
            
            
            if(!$(".training .item").eq(i).is(":visible")){
                
               elemVis.addClass("hide");
                setTimeout(function(){
                    elemVis.css({'display':"none"});
                    elemVis.removeClass("hide");
                    elemVis.removeClass("show");
                    elemVis.addClass("none");
                    $(".training .item").eq(i).css({'display':"block"});
                      $(".training .item").eq(i).addClass("show");
                    
                },1000);    
                
               setTimeout(function(){
                    
                    
                   
                    $(".training .item").eq(i).removeClass("none"); 
                    $(".training .item").eq(i).removeClass("show");
               },2000);
            }
        });
    });
    
	
	
	$(".calendar .next").on("click",function(){
		
	});
	
	
	$(".btn-link").on("click",function(e){
		e.preventDefault();
		
		$("#calendar-callback").slideDown(1000);
		let pos = $("#calendar-callback").offset().top;
		
		$("html,body").animate({
			
			   scrollTop:pos
		},1000);
		
		
		
		
	});
	
	
	
	$(".li-item-parent").each(function(i){
		$(this).on("click",function(e){
			e.preventDefault();
			let pos = $(".training").offset().top;
			if(i==0){
				$(".training .tabs-control li").eq(i).click();
				$("html,body").animate({
			
			   		scrollTop:pos
				},1500);
				
			}
			if(i==1){
				$(".training .tabs-control li").eq(i).click();
				$("html,body").animate({
			
			   		scrollTop:pos
				},1500);
				
			}
			if(i==2){
				$(".training .tabs-control li").eq(i).click();
				$("html,body").animate({
			
			   		scrollTop:pos
				},1500);
				
			}

		});
	})
day =  $(".ui-state-active").text();	
month = $(".ui-datepicker-month").text();
year = $(".ui-datepicker-year").text();
console.log(day)
	
$(".ui-datepicker-prev").on("click",function(){
	
	 cm = $(".ui-datepicker-month").text();
	console.log("www");
	
});

	
	console.log($(".ui-datepicker-month").text());
	
var listmonth = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
/*	
$(".politic-wrapp button").on("click",function(e){
	e.preventDefault();
	
	$(".callback").addClass("hide");
		setTimeout(function(){
                   
                    $(".callback").css({'display':"none"});
			
					$(".calendar").css({'display':"block"});
					$(".calendar").addClass("show");
                },1000);
	
})
*/
	
	$(".next").on("click",function(){
		console.log( month)
		if(month  == listmonth[0] || month==1){
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Января")
			
			
			
		}
		if(month  == listmonth[1] || month==2){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Февраля")
			
			
			
		}
		if(month  == listmonth[2] || month==3){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Марта")
			
			
			
		}
		if(month  == listmonth[3] || month==4){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Апреля")
			
			
			
		}
		if(month  == listmonth[4] || month==5){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Мая")
			
			
			
		}
		if(month  == listmonth[5] || month==6){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Июня")
			
			
			
		}
		if(month  == listmonth[6] || month==7){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Июля")
			
			
			
		}
		if(month  == listmonth[7] || month==8){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Августа")
			
			
			
		}
		if(month  == listmonth[8] || month==9){
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Сентября")
		
			
			
			
		}
		if(month  == listmonth[9] || month==10){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Октября")
			
			
			
		}
		if(month  == listmonth[10] || month==11){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Ноября")
			
			
			
		}
		if(month  == listmonth[11] || month==12){
			
			$('.time-wrapp .year').text(year);
			$('.time-wrapp .day').text(day);
			$(".time-wrapp .month").text("Декабря")
			
			
			
		}
		
			
			$(".calendar-wrapp").addClass("hide");
			setTimeout(function(){
                   $("#calendar-callback   .calendar-wrapp").css({'display':"none"});
                    $("#calendar-callback  .calendar-wrapp").removeClass("hide");
                    $("#calendar-callback  .calendar-wrapp").removeClass("show");
                   $("#calendar-callback .calendar-wrapp").addClass("none");
				
				
                    $("#calendar-callback  .time").css({'display':"block"});
                    $("#calendar-callback  .time").addClass("show");
                    
                },1000);

				setTimeout(function(){
					$("#calendar-callback  .time").removeClass("none");
					$("#calendar-callback  .time").removeClass("show");
				},2000);
	
		

	});
	
	
		
	$(".back-data .prev").on("click",function(){
		$(".time").addClass("hide");
		
			setTimeout(function(){
                   	$("#calendar-callback   .time").css({'display':"none"});
                    $("#calendar-callback  .time").removeClass("hide");
                    $("#calendar-callback  .time").removeClass("show");
                   	$("#calendar-callback .time").addClass("none");
				
				
                    $("#calendar-callback  .calendar-wrapp").css({'display':"block"});
                    $("#calendar-callback  .calendar-wrapp").addClass("show");
                    
                },1000);

				setTimeout(function(){
					$("#calendar-callback  .calendar-wrapp").removeClass("none");
					$("#calendar-callback  .calendar-wrapp").removeClass("show");
				},2000);
		
		
	});
	
	
	
	
	
	
	
	$(".time-wrapp table td").each(function(){
		$(this).on("click",function(){
			$(".time-wrapp table td").removeClass("active");
			$(this).addClass("active");
		});
	});
	
	
	
	$("#check-politic").on("click",function(){
		if ($("#check-politic").is(':checked')){
			
			if($(".afferta label").hasClass('checkPlease')){

                         $(".afferta label").removeClass("checkPlease");
            }
			
		}
		
	});
	
	
	$("#phone").mask("+7 (999) 99-99-999");
	
	
	
    
});	