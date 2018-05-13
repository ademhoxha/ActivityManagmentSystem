var codes = require('./errorUtils').serverCodes;
var GeneralError = require('./generalError').GeneralError;

class EmailError extends GeneralError{
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
            return new EmailError(text);
        return new EmailError();
    }
}

var istance = new Factory();

module.exports = {
    EmailError : istance
}