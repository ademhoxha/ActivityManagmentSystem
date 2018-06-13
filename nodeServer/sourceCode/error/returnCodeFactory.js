var DBError = require('./dbError').DBError;
var DataError = require('./dataError').DataError;
var EmailError = require('./emailError').EmailError;
var UnauthorizedError = require('./unauthorizedError').UnauthorizedError;

var SuccessRet = require('./successRet').SuccessRet;
var NotRequiredRet = require('./notRequiredRet').NotRequiredRet;



class ReturnCodeFactory {
    dbError(text){
        return DBError.generate(text);
    }
    dataError(text){
        return DataError.generate(text);
    }
    emailError(text){
        return EmailError.generate(text);
    }
    successRet(text){
        return SuccessRet.generate(text);
    }
    notRequiredRet(text){
        return NotRequiredRet.generate(text);
    }
    unauthorizedError(text){
        return UnauthorizedError.generate(text);
    }
}


var istance = new ReturnCodeFactory();

module.exports = {
    ReturnCodeFactory : istance
}