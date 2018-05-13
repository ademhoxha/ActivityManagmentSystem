var dbAPI = require('../../publicDbAPI/publicDBApi').publicDBApi;

var user = dbAPI.getSecretUserEntity();

var data = {
    query: {
        email: "adem.hoxha@hotmail.it",
        /*authToken: "watchMeFly"*/
    }
}

function find() {
    console.log("FIND")
    user.find(data, (err, ret) => {
        if (err)
            return console.log("ERRORE " + err)
        console.log("OOK " + ret)
    })
}


function update() {
    data.update = {
        company: "TEST",
        authToken: "sjehweuwensjka"
    }

    user.update(data, (err, ret) => {
        if (err)
            return console.log("ERRORE " + err)
        console.log("OOK " + ret)
    })
}


find();
//update();