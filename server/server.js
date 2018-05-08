var express = require('express')
var bodyParser = require("body-parser");

var app = express()
app.use(bodyParser.json());


app.all("/api", (req,res) => {
    res.send("TRY...")
})

var distDir = __dirname + "./../dist/";
app.use(express.static(distDir));

app.listen(process.env.PORT || 8080)