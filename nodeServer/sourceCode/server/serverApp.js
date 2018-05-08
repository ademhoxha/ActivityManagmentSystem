/*
    Author: Adem Hoxha  
    Date: 2018/04/21 
*/ 
var path = require('path')
var express = require('express');
var helmet = require('helmet')
const bodyParser = require('body-parser');

var app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, '../../../mean-angular5/dist')));

module.exports = {
    app : app,
}