/*
    Author: Adem Hoxha  
    Date: 2018/04/23 
*/
const path = require('path');
var app = require('../server/serverApp').app;

class baseRoute {
    applyRoute(){
    }

    notFound() {
        app.use(function(req, res, next) {
            /*var err = new Error('Not Found');
            err.status = 404;
            next(err);*/
            res.send('Not Found -- something bad happened')
        });
    }

    angularRoute() {
		
		/*var distDir = __dirname + "./../../../dist/";
		app.use(express.static(distDir));*/
		
        app.all('*', (req, res) => {
            res.sendFile(path.join(__dirname, './../../../dist/index.html'));
        })
        
        /*var distDir = __dirname + "./../dist/";
        app.use(express.static(distDir));
        
        app.all('*', (req, res) => {
            res.sendFile(path.join(__dirname, './../dist/index.html'));
        })*/
		
    }
}

module.exports = {
    baseRoute : baseRoute
}
