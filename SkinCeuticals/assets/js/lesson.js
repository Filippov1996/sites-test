'use strict';



const personalMovieDB = {
       count:"1",
       movies:"1",
       actors:"1",
       genres:"1",
       privat:false
};



function showMyDB(){
    
    
    if(personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres(){
    
    
    let answer=[];
    for(let i=0; i<3; i++){
        
        let question = prompt(`"Ваш любимый жанр под номером ${i}"`);
        answer[i]=question;
        personalMovieDB.genres = answer;
    }
    
    
}
 writeYourGenres()