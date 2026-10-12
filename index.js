const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.get('/portfolio/water-reflections', (req, res) => {
    res.render('category');
});

app.listen(3000, () => {
    console.log('Phil Parry site listening on port 3000!');
});