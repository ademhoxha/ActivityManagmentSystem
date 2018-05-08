var dbAPI = require('../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;

var otp = dbAPI.getOtpReceiverEntity();

var data = {}
data.query = {
    receiver : "adem.hoxha@hotmail.it",
    otp : {
        code : 124521,
        date : Date.now()
    }
}

otp.insert(data, (err, ret) => {
    if(err)
        console.log("ERROR "+err)
    else
        console.log("OOOK "+ret)
})