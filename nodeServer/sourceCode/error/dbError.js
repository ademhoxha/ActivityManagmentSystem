var codes = require('./errorUtils').serverCodes;
var GeneralError = require('./generalError').GeneralError;

class DBError extends GeneralError{
    constructor(text){
        if(text)
            super(text, codes.serverErrors.InternalServerError);
        else
            super("Internal Server Error ", codes.serverErrors.InternalServerError);
    }
}

class Factory {
    generate(text){
        if(text)
            return new DBError(text);
        return new DBError();
    }
}

var istance = new Factory();

module.exports = {
    DBError : istance
}