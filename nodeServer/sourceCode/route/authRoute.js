var app = require('../server/serverApp').app;
var baseRoute = require('./baseRoute').baseRoute;

class authRoute extends baseRoute {
    applyRoute() {
        // session
        var standardClientSession = require("../clientSession/standardClientSession").standardClientSession;

        app.all("*", function (req, res, next) {
            console.log("************* NEW *************");
            console.log("req.path = " + req.path);
            console.log("req.email = " + req.body.email);
            console.log("req.psw = " + req.body.psw);
            if (req.path.toLowerCase() == "/login") {
                console.log("AUTH ===> login request");
                // logout if it is logged
                if (standardClientSession.isLogged(req)) {
                    console.log("AUTH ===> login request  => is logged");
                    standardClientSession.logout(req);
                }
                // see if can login
                if (standardClientSession.canLogin(req)) {
                    console.log("AUTH ===> login request  => can login");
                    standardClientSession.logout(req);
                    console.log("AUTH ===> login request  => can login => logout");
                    // exec the login
                    if (standardClientSession.login(req)) {
                        console.log("AUTH ===> login request  => logged");
                        //res.redirect('/index');
                        res.redirect('/success');
                    }
                }
                console.log("AUTH ===> see login page");
                next(); // return to login page
            }
            else if (req.path.toLowerCase() == '/logout') {
                // logout if it is logged
                if (standardClientSession.isLogged(req)) {
                    standardClientSession.logout(req);
                }
                res.redirect('/login');
            }
            else {
                console.log("AUTH ===> Other request");
                if (standardClientSession.isLogged(req)) {
                    console.log("AUTH ===> Other request  => logged");
                    next();
                }
                else {
                    console.log("AUTH ===> Other request  => redirect to login");
                    res.redirect('/login');
                }
            }

        });

    }
}

module.exports = {
    authRoute: authRoute
}