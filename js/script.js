"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms.length>50 || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const obj = {
    count: numberOfFilms,
    movies: {
        
    },
    acros: {

    },
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length<50) {
            obj.movies[a] = b;
            console.log ('done');
        } else {
            console.log('error');
            i--;
        }
    
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (obj.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (obj.count >= 10 && obj.count < 30) {
        console.log("Вы классический зритель");
    } else if (obj.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Ошибка!");
    }
}    

detectPersonalLevel();

function showMyBd () {
    if (obj.privat === false) {
        console.log(obj);
    }
}

// function showMyBd (hidden) {
//     if (!hidden) {
//         console.log(obj);
//     }
// }

showMyBd ();

function writYourGenres () {
    const genA = prompt('Ваш любимый жанр под номером 1', ''),
          genB = prompt('Ваш любимый жанр под номером 2', ''),
          genC = prompt('Ваш любимый жанр под номером 3', '');
    
    obj.genres = [genA, genB, genC];       
}

// function writYourGenres () {
//     for (let i =1; i <= 3; i++) {
//         obj.genres[i -1] = prompt(`Ваш любимый жанр под номером ${1}`);
//     }       
// }

writYourGenres();

console.log(obj);