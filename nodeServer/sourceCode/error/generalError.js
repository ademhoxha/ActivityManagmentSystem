
class GeneralError extends Error {
    constructor(text, code){
        super(text);
        this.code = code;
    }
}

module.exports = {
    GeneralError : GeneralError
}