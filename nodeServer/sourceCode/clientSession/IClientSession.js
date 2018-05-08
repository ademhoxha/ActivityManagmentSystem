class IClientSession {

    applySession(min = 5, extraMin = 1) {
        var app = require('../server/serverApp').app;
        var session = require('client-sessions');
        app.use(session({
            cookieName: 'session',
            secret: 'random_string_goes_here',
            duration: min * 60 * 1000,
            activeDuration: extraMin * 60 * 1000,
        }));
    }

    login(req) { }

    logout(req) { }

    isLogged(req) { }

    canLogin(req) { }



}

module.exports = {
    IClientSession: IClientSession
}