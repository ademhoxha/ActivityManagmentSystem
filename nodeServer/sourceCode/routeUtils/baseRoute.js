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
            res.send('Not Found -- something bad happened')
        });
    }

    angularRoute() {
        app.all('*', (req, res) => {
            res.sendFile(path.join(__dirname, './../../../dist/index.html'));
        })
    }
}

module.exports = {
    baseRoute : baseRoute
}
