"use strict"

let money = +prompt("Ваш бюджет на месяц",'');
let time  = prompt('Ведите дату в формате YYYY-MM-DD');





const appData = {
    budget:parseInt(money),
    timeData:time,
    expenses:{},
    optionalExpenses:null,
    income:null,
    savings:false
    
}

for(let i=0; i<2; i++){
    
    let a = prompt("Введите обязательную статью расходов в этом месяце",'');
    let b = prompt("Во сколько обойдется?",'');
    
    
    if((typeof a ==='string') && (typeof expensea != null) && (typeof b != null) && b != "" && b != "" && a.length < 50){
         appData.expenses[a]=b;   
    }else{
        console.log('no data');
    }
}
appData.moneyOneDay = parseInt(money)/30;

console.log(appData.moneyOneDay);
console.log(appData);












