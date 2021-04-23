const fetch = require('node-fetch') 

const API_KEY1 = '...'
const API_KEY2 = '...'


const getWeather = async (req, res)=>{
    // res.send('ok')
    try {
        let result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${API_KEY1}`)
        let data = await result.json();
        res.status(200).send(data);

    } catch (err) {
        res.status(500).send('Internal Server error')
        console.log(err)
    }
};

const hourlyForecast4days = async (req, res) =>{
    try {
        let resultat = await fetch(`http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${req.params.city}&appid=${API_KEY1}`)
        let data = await resultat.json();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send('Internal Server err')
        console.log(error)
    }
}

const dailyForecast = async (req, res) =>{
    try {
        let resultat = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${req.params.city}&cnt=${req.params.period}&appid=${API_KEY2}`)
        let data = await resultat.json();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send('Internal Server err')
        console.log(error)
    }
}

module.exports = {
    getWeather,
    hourlyForecast4days,
    dailyForecast
}