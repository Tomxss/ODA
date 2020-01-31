const express = require('express');
const handle = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Load models
const Message = require('./models/message');

// Load keys file
const Keys = require('./config/keys')

// Debugging
const debug = require('debug')('app');
const chalk = require('chalk');
const port = process.env.PORT || 3000;

const app = express();
// body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Connect to mlab MongoDb
mongoose.connect(Keys.MongoDB, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    debug(chalk.rgb(255, 213, 5)('Connected to MongoDB.'));
}).catch((err) => {
    debug(err);
})

// setup view engine
app.engine('handlebars', handle({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home',{ 
        title: 'Home'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact',{
        title: 'Contact'
    });
});

app.post('/contactUs', (req, res) => {
    debug(req.body);
});

app.listen(port, () => {
    debug(chalk.rgb(255, 213, 5)(`Server is running optimally on port: ${chalk.magenta(port)}`));
});