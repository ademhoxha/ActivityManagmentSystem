/*
    Author: Adem Hoxha  
    Date: 2018/04/23 
*/
const standardRoute = require('./standardRoute').standardRoute;
const loggerRoute = require('../logger/loggerRoute').loggerRoute;
const authRoute = require('../auth/authRoute').authRoute;
const otpRoute = require('../otp/otpRoute').otpRoute;
const registrationRoute = require('../registration/registrationRoute').registrationRoute;
const ProjectRoute = require('../project/projectRoute').ProjectRoute;


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
    getRegistrationRoute(){
        return new registrationRoute();
    }
    getProjectRoute(){
        return new ProjectRoute();
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

function getRegistrationRoute(){
    return factory.getRegistrationRoute();
}

function getProjectRoute(){
    return factory.getProjectRoute();
}

module.exports = {
    getRuoteClass : getRuoteClass,
    getLoggerRoute : getLoggerRoute,
    getAuthRoute : getAuthRoute,
    getOtpRoute : getOtpRoute,
    getRegistrationRoute : getRegistrationRoute,
    getProjectRoute : getProjectRoute
}
