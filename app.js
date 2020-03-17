
const path = require('path');
//This is the main server file 
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config()

const MONGODB_URI = MONGODB_URI;

const postRoute = require('./api/postRoute');
const categoryRoute = require('./api/category');

//middleware
app.use(express.static(path.join(__dirname, 'views')));

//express bodyparser
app.use(express.json());

//logger middleware
app.use(morgan('common'));

//Cors middleware
app.use(cors({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Method': 'GET, POST, PUT, DELETE,  OPTIONS'
}));

//middleware routing
app.use('/api', postRoute);
app.use('/admin', categoryRoute);


const PORT = process.env.PORT || 5000;

mongoose.connect(
    MONGODB_URI
    ).then(result => {
        app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));
    }).catch(err => {
        // const errors = new Error('')
        console.log(err)
    });