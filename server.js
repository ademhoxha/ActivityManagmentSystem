var express = require('express')
var bodyParser = require("body-parser");

var app = express()
app.use(bodyParser.json());


app.all("*", (req,res) => {
    res.send("TRY...")
})

app.listen(process.env.PORT || 8080)