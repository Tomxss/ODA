const express = require('express');
const handle = require('express-handlebars');
const debug = require('debug')('app');
const chalk = require('chalk');
const port = 3000;

const app = express();
// setup view engine
app.engine('handlebars', handle({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    debug(`Server is running optimally on port: ${chalk.magenta(port)}`);
});