/*
    Author: Adem Hoxha  
    Date: 2018/04/21 
*/ 
var path = require('path')
var express = require('express');
var helmet = require('helmet')
const bodyParser = require('body-parser');
var errorUtils = require('../error/errorUtils').serverCodes; // just to load

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