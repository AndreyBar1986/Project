"use strict";

 
 const personalMovieDB = {
     count: 0,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
     start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Назваие просмотренного фильма?", "");
            let b = prompt("На сколько оцените его?", "");
        
            if (a != null && b != null && a != '' &&
             b != '' && a.length < 50 && b.length  < 50) {
                 personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
         }
    },
    detectpersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов")
        } else {
            if (personalMovieDB.count < 31) {
                alert("Вы класический зритель");
            } else {
                if (personalMovieDB.count > 30) {
                   alert("Вы киноман");
                } else {
                   alert("Error");
                }
            }
        }
    },
    showMyBD: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
             let str = prompt(`Ваш любимий жанр под номером ${i}`);
             if (str.length === '' || str == null) {
                i--;
             } else {
                 personalMovieDB.genres[i-1] = str;
             }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
 };