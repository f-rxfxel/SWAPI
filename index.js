const { default: axios } = require("axios");

const url = 'https://swapi.dev/api/'

const options = {
    method: 'get',
    url: url + '/planets/'
};

axios(options)
    .then((response) => {
        var planets = response.data.results;
        planets.forEach(planet => {
            console.log(planet.name)
        });
    })
    .catch((error) => {
        console.log('erro na requisição');
    });