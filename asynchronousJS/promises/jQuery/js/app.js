"use strict";

const moviePlanets = function (movieNum) {
    let url = 'https://swapi.dev/api/films/';

    $.getJSON(url + movieNum + '/')
        .then(function (response) {
            console.log(response.title);

            response.planets.forEach(planet => {
                $.getJSON(planet).then(planetData => console.log(planetData.name))
            });
        }).catch(error => console.log('Error occured', error));
};

moviePlanets(3);