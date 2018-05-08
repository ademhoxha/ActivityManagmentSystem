var express = require('express')
var bodyParser = require("body-parser");
const path = require('path');

var app = express()
app.use(bodyParser.json());


app.all("/api", (req,res) => {
    res.status(200).json({ok:"JSON INVIATO"});
})

/*var distDir = __dirname + "./../dist/";
app.use(express.static(distDir));*/
app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, './../dist/index.html'));
})

app.listen(process.env.PORT || 8080)