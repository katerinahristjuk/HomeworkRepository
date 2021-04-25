const fetch = require('node-fetch');
const config = require('../config');

const API_KEY = config.get('weather').api_key;
const API_PREFIX = `http://api.openweathermap.org/data/${config.get('weather').api_version}`

const cityCashe = {};
let currentTimestamp = new Date().getTime();
    // const cityCasheExample = {
    //     "skopje": {
    //         data: {}, //podatoci od api
    //         timestamp: 152326521 //vreme koga gi dobivme podatocite
    //     }
    // }

const forCity = async (city) =>{
    if(cityCashe[city] && cityCashe[city].timestamp > currentTimestamp) { 
    // if(cityCashe(city)) = dali vo cityCashe postoi rezultat za baranoto city
    // && cityCashe[city].timestamp > currentTimestamp = i current timestampot e pomal od keshiraniot timestamp
        //pomal, bidejki keshiraniot timestamp = (timestamp na kreiranje + 60 sekundi)
        return cityCashe[city].data
    }

    let result = await fetch(`${API_PREFIX}/weather?q=${city}&appid=${API_KEY}`); //povik do api
    let data = await result.json(); //parsiranje na povikot vo json

    cityCashe[city] = {
        data: data,
        timestamp: new Date().getTime() + 60*1000 //milisekundi + 60 * 1000 miliseundi
    }

    return cityCashe[city].data;
};

const forCityState = async (city, state) =>{
    // const cityStateCasheExample = {
    //  "mk": {
    //     "skopje": {
    //         data: {}, //podatoci od api
    //         timestamp: 152326521 //vreme koga gi dobivme podatocite
    //     }
    //  }
    //}

    if(cityCashe[state[city]] && cityCashe[state[city]].timestamp > currentTimestamp){
        return cityCashe[state[city]].data
    };
    let result = await fetch(`${API_PREFIX}/weather?q=${city},${state}&appid=${API_KEY}`);
    let data = await result.json();

    cityCashe[state[city]] = {
        data: data,
        timestamp: new Date().getTime + 60*1000
    };

    return cityCashe[state[city]].data;
};

module.exports={
    forCity,
    forCityState
}