//imports, requires
const express = require("express");
const controller = require('./controllers/weatherController')

//declarations
const api = express();

//middlewares
api.use(express.json());

//routes
api.get('/weather/:city', controller.getWeather);
api.get('/weather/hourly/:city', controller.getWeather);
api.get('/weather/:city/:period', controller.dailyForecast)

//start
api.listen(9000, err => {
    if(err){
        return console.log(err);
    }
    console.log('Listening on port 9000 :)')
})