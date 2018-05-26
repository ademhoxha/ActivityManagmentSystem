var codes = require('./errorUtils').serverCodes;
var GeneralError = require('./generalError').GeneralError;

class NotRequiredRet extends GeneralError{
    constructor(text){
        if(text)
            super(text, codes.success.NoContent);
        else
            super("Not Required", codes.success.NoContent);
    }
}

class Factory {
    generate(text){
        if(text)
            return new NotRequiredRet(text);
        return new NotRequiredRet();
    }
}

var istance = new Factory();

module.exports = {
    NotRequiredRet : istance
}