const express = require('express');
const expressLayouts = require('express-ejs-layouts');
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
<<<<<<< HEAD
    debug(`Step 2: ` + chalk.rgb(255, 213, 5)('Connected to MongoDB.'));
=======
    debug(`Step 2: ` + chalk.rgb(255, 213, 5)(`Connected to MongoDB.`));
>>>>>>> bf782a9a63072ae01e25bd0a6a6eeb93b4d157e0
}).catch((err) => {
    debug(err);
})

// setup view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

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
    const newMessage = {
        fullname: req.body.fullname,
        email: req.body.email,
        message: req.body.message,
        date: new Date()
    }
    new Message(newMessage).save((err, message) => {
        if (err){
            throw err;
        }else {
            res.render('newmessage', {
                title: 'sent'
            });
        }
    })
});

app.listen(port, () => {
    debug(`Step 1: ` + chalk.rgb(255, 213, 5)(`Server is running optimally on port: ${chalk.magenta(port)}`));
});