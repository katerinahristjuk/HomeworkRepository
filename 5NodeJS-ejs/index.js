const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/courses', (req, res) => {
    const course = [{
            name: "JavaScript",
            url: "https://semosedu.com.mk/KatalogKursevi.aspx?idKategorija=1014&IdPodKategorija=1047&IdLanguage=2&IdRoot=5"
        },
        {
            name: "Graphic Design",
            url: "https://semosedu.com.mk/KatalogKursevi.aspx?idKategorija=1014&IdPodKategorija=1043&IdLanguage=2&IdRoot=5"
        },
        {
            name: "WEB Design",
            url: "https://semosedu.com.mk/KatalogKursevi.aspx?idKategorija=1014&IdPodKategorija=1044&IdLanguage=2&IdRoot=5"
        }
    ]

    res.render('pages/courses', { courses: course })
});

app.get('/schedule', (req, res) => {
    const lessons = [
        "Monday - 19:30-22:00",
        "Wednesday - 19:30-22:00",
        "Friday - 19:30-22:00"
    ]

    res.render('pages/schedule', { schedule: lessons });
});

app.get('/contacts', (req, res) => {
    const contact = [{
            type: "Phone number: ",
            id: "+381 63 4567"
        },
        {
            type: "Adress: ",
            id: "Kuzman Josifovski Pity no.19 local 6, 1000 Skopje"
        },
        {
            type: "Mail: ",
            id: "50kursevi@semos.com.mkavn"
        }
    ]

    res.render('pages/contacts', { contacts: contact });
});

app.listen(PORT, () => {
    console.log(`Listens on ${PORT}`);
});