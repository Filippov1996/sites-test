$(document).ready(function() { 
    
    
    $('.js-range-slider').ionRangeSlider({
      skin: 'round',
      min: 220,
      max: 40094,
      from: 220,
      max_postfix: '+',
      postfix: ' €',
      grid: true,
      onStart: function(data) {
         $('#calcResult').text(
            Math.round(data.from * 0.32 + data.from) + ' €'
         )
      },
      onChange: function(data) {
         $('#calcResult').text(
            Math.round(data.from * 0.32 + data.from) + ' €'
         )
      },
   })
    
    
    var count_l = Number($('.js-count-l').text());
    var count_r = Number($('.js-count-r').text());
    
    var timer= setInterval(function(){
    
      count_r = Number($('.js-count-r').text());
        if(count_r==0){
            clearInterval(timer);
            console.log("yes")
        }else{
            count_r-=1;
            count_l+=1;
             $('.js-count-r').text(count_r);
             $('.js-count-l').text(count_l);
        }
        
    },3000);
    
    
    
});