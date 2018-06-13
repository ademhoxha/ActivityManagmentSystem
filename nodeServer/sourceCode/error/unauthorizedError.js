var codes = require('./errorUtils').serverCodes;
var GeneralError = require('./generalError').GeneralError;

class UnauthorizedError extends GeneralError{
    constructor(text){
        if(text)
            super(text, codes.errors.Unauthorized);
        else
            super("User Not Authorized", codes.errors.Unauthorized);
    }
}

class Factory {
    generate(text){
        if(text)
            return new UnauthorizedError(text);
        return new UnauthorizedError();
    }
}

var istance = new Factory();

module.exports = {
    UnauthorizedError : istance
}