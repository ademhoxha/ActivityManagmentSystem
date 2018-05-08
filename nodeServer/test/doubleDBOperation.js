var dbAPI = require('../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;
var user = dbAPI.getUserEntity();

var data = {}
var query = {}
query.email = "adem.hoxha@hotmail.it"
data.query = query

find1()



function find1() {
    console.log("**************************************************************************")

    user.find(data, function (err, ret) {
        if (err)
            return console.log("Error IN FIND 1" + err)
        console.log("ALL OK FIND 1" + ret)
        return find2()
    })
}



function find2() {
    console.log("**************************************************************************")
    user.find(data, function (err, ret) {
        if (err)
            return console.log("Error IN FIND 2" + err)
        console.log("ALL OK FIND 2" + ret)
        insert1()
    })
}


function insert1() {
    console.log("**************************************************************************")
    query.email = "adem.hoxha@libero.it"
    query.mobilephone = "+393287314829"
    query.company = "Libero"

    data.query = query
    user.insert(data, function (err, ret) {
        if (err)
            return console.log("Error IN INSERT 1" + err)
        console.log("ALL OK IN INSERT 1" + ret)
        update1()
    })
}

function update1() {
    user = dbAPI.getUserEntity();
    console.log("**************************************************************************")
    query.email = "adem.hoxha@libero.it"
    query.mobilephone = "+393287314829"
    query.company = "Libero"

    data.query = query
    data.update = { name: "Bekim" }
    user.update(data, function (err, ret) {
        if (err)
            return console.log("Error UPDATE 1" + err)
        /*return*/ console.log("ALL OK IN UPDATE 1" + ret)
        return insert2()
    })
}

function insert2() {
    console.log("**************************************************************************")
    query.email = "test.test@libero.it"
    query.mobilephone = "+0000000"
    query.company = "test"

    data.query = query
    user.insert(data, function (err, ret) {
        if (err)
            return console.log("Error IN INSERT 2" + err)
        return console.log("ALL OK IN INSERT 2" + ret)
    })
}


function remove1() {
    console.log("**************************************************************************")
    query.email = "adem.hoxha@libero.it"
    data.query = query
    user.remove(data, function (err, ret) {
        if (err)
            return console.log("Error REMOVE 1" + err)
        return console.log("ALL OK IN REMOVE 1" + ret)
    })
}