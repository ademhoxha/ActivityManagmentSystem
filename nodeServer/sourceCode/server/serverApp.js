/*
    Author: Adem Hoxha  
    Date: 2018/04/21 
*/ 
var express = require('express');
var helmet = require('helmet')
const bodyParser = require('body-parser');
var errorUtils = require('../error/errorUtils').serverCodes; // just to load

// load db schema
var models = require('../entities/models').Models;
var entitiesFactory = require('mongodb-entities').entitiesFactory;
entitiesFactory.setModel(models);

var app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
// Heroku server
var distDir = __dirname + "./../../../dist/";
app.use(express.static(distDir));

module.exports = {
    app : app
}