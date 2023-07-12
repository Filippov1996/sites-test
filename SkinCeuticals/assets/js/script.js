$(document).ready(function(){	
    
    /* Локализация datepicker */
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
    
    
$(".calend").datepicker();    
    
    
    
let form = document.querySelectorAll(".form")[0];
let date = document.querySelectorAll(".date")[0]; 
let timer = document.querySelectorAll(".wrrap-timer")[0];     
$(".next-btn").on("click",function(){
    form.style.display="none";
    date.style.display="block";
    timer.style.display="block";

    $(".timer-block").addClass("showTimer");
});
    
    
  $(".time button").each(function(){
     $(this).on('click',function(){
         $(".time button").removeClass("checkTime");
         $(this).addClass("checkTime");
         
     });
  });  
    
  $(".btn-recording").on("click",function(){
      
      $(".warning-block").fadeIn(1000);
       date.style.display="none";
       
      $("#callback .border").addClass('bgNone');
      
  });
    
    
    
    $('.btn-call').on("click",function(e){
        e.preventDefault();
        
        
        let href = $(this).attr('href');
        
        $('html, body').animate({
        scrollTop: $(href).offset().top
            },1000);
        
        
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});	
	