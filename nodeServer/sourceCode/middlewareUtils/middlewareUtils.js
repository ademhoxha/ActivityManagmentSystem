/*
    Author: Adem Hoxha  
    Date: 2018/04/23 
*/
const sessionMiddleware = require('../clientSession/sessionMiddleware').sessionMiddleware;

class middlewareFactory {

    getSessionMiddleware(){
        return new sessionMiddleware();
    }
}

var factory = new middlewareFactory();

function getSessionMiddleware(){
    return factory.getSessionMiddleware();
}


module.exports = {
    getSessionMiddleware : getSessionMiddleware
}
