var user = require('../../../mongoDb/publicDbAPI/publicDBApi').publicDBApi.getUserEntity();



var data = {};
data.query = { email: "00393287314829" };
//data.query = { email: "adem.hoxha@hotmail.it" };

user.find(data, (err,ret) => {
    if(err)
        console.log("error "+err)
    else
        console.log("ook "+ret)
})