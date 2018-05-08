var emailApi = require('../emailPublicApi/emailPublicApi')

var data = {
    receiver: "adem.hoxha@hotmail.it",
    object: "Test",
    text: "This is a test",
    html: ""
}

emailApi.sendEmail(data, function (err, info) {
    if (err)
        console.log("ERROR " + err)
    else
        console.log("SUCCESS")
})