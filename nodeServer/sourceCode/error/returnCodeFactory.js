var DBError = require('./dbError').DBError;
var DataError = require('./dataError').DataError;
var EmailError = require('./emailError').EmailError;
var SuccessRet = require('./successRet').SuccessRet;




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
}


var istance = new ReturnCodeFactory();

module.exports = {
    ReturnCodeFactory : istance
}