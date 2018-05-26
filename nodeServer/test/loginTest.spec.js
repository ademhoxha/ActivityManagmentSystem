

var standardClientSession = require('../sourceCode/clientSession/standardClientSession').standardClientSession;

var req = {
    body : {
        email : "adem.hoxha@hotmail.it",
        password: "123456Aa!",
        otp : {
            otpCode : "295489"
        }
    }
}

standardClientSession.login(req, (err,ret) => {
    if(err)
        console.log("ERROR "+err)
    else{
        console.log("OOOK")
        console.log("ret   " +ret)
        console.log("ret[0] "+ret[0])
    }
})