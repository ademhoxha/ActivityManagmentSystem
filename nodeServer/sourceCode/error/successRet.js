var codes = require('./errorUtils').serverCodes;
var GeneralError = require('./generalError').GeneralError;

class SuccessRet extends GeneralError{
    constructor(text){
        if(text)
            super(text, codes.success.OK);
        else
            super("OK", codes.success.OK);
    }
}

class Factory {
    generate(text){
        if(text)
            return new SuccessRet(text);
        return new SuccessRet();
    }
}

var istance = new Factory();

module.exports = {
    SuccessRet : istance
}