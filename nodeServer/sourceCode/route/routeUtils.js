/*
    Author: Adem Hoxha  
    Date: 2018/04/23 
*/
const standardRoute = require('./standardRoute').standardRoute;
const loggerRoute = require('./loggerRoute').loggerRoute;
const authRoute = require('./authRoute').authRoute;
const otpRoute = require('./otpRoute').otpRoute;
const sessionMidd = require('./sessionMiddleware').sessionMiddleware;
const registrationRoute = require('./registrationRoute').registrationRoute;


class routeFactory {
    getStandardRoute(){
        return new standardRoute();
    }
    getLoggerRoute(){
        return new loggerRoute();
    }
    getAuthRoute(){
        return new authRoute();
    }
    getOtpRoute(){
        return new otpRoute();
    }
    getSessionMidd(){
        return new sessionMidd();
    }
    getRegistrationRoute(){
        return new registrationRoute();
    }
}

var factory = new routeFactory();

function getRuoteClass(name) {

    if(name == "standardRoute")
        return factory.getStandardRoute();
    else 
        return undefined;
}

function getLoggerRoute(){
    return factory.getLoggerRoute();
}

function getAuthRoute(){
    return factory.getAuthRoute();
}

function getOtpRoute(){
    return factory.getOtpRoute();
}

function getSessionMidd(){
    return factory.getSessionMidd();
}

function getRegistrationRoute(){
    return factory.getRegistrationRoute();
}

module.exports = {
    getRuoteClass : getRuoteClass,
    getLoggerRoute : getLoggerRoute,
    getAuthRoute : getAuthRoute,
    getOtpRoute : getOtpRoute,
    getSessionMidd : getSessionMidd,
    getRegistrationRoute : getRegistrationRoute
}
