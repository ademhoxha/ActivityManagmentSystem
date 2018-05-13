var codes = require('./errorUtils').serverCodes;
var GeneralError = require('./generalError').GeneralError;

class DataError extends GeneralError{
    constructor(text){
        if(text)
            super(text, codes.errors.MethodNotAllowed);
        else
            super("Information not found", codes.errors.MethodNotAllowed);
    }
}

class Factory {
    generate(text){
        if(text)
            return new DataError(text);
        return new DataError();
    }
}

var istance = new Factory();

module.exports = {
    DataError : istance
}