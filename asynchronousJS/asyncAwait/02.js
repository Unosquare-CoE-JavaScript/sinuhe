const swapiFilms = async function() {
    let url = 'https://swapi.dev/api/films';
    let filmsData = {};
    let films = [];

    filmsData = await fetch(url).then(data => data.json());

    films = filmsData.results.map(obj => obj.title);

    console.log(films);
};

swapiFilms();