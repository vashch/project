"use strict";

const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

const obj = {
    count: numberOfFilms,
    movies: {
        
    },
    acros: {

    },
    genres: [],
    privat: false
};


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

    if (obj.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (obj.count >= 10 && obj.count < 30) {
        console.log("Вы классический зритель");
    } else if (obj.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Ошибка!");
    }

console.log(obj);
