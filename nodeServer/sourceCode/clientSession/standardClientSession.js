var IClientSession = require("./IClientSession").IClientSession;

class standardClientSession extends IClientSession {

    applySession(min,extraMin) {
        if(min && extraMin)
            super.applySession(min, extraMin);
        else if (min)
            super.applySession(min);
        else
            super.applySession();
    }

    login(req) {
        if (req.body.email && req.body.psw == "123456aA!") {
            req.session.user = req.body.email;
            req.session.ip = "localhost";
            req.session.token = "MyToken";
            return true;
        }
        return false;
    }

    logout(req) {
        delete req.session.user;
        delete req.session.ip;
        delete req.session.token;
    }

    isLogged(req) {
        if (req.session.user && req.session.ip && req.session.token)
            return true;
        return false;
    }

    canLogin(req) { 
        if (req.body.email && req.body.psw)
            return true;
        return false;
    }

}

var istance = new standardClientSession();

module.exports = {
    standardClientSession : istance
}