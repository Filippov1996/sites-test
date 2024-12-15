'use strict'

const data = {
    
}

let btn_q = document.querySelectorAll('.btn-send');
let text_q1 =  document.getElementById("text-q1");
let count = 0;

function get_data(text_q1){
    data.incomeMoth = text_q1.value;
    console.log(data);
    
     count++;
     console.log(count);
}

btn_q[count].addEventListener("click",function(){
    get_data(text_q1);
    
});
