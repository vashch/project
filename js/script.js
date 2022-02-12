"use strict";

const numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели?", "");

const obj = {
    count: numberOfFilms,
    movies: {
        
    },
    acros: {

    },
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

obj.movies[a] = b;
obj.movies[c] = d;

console.log(obj);
