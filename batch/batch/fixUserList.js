var factory = require("../../nodeServer/sourceCode/entitiesUtils/entitiesFactory").EntitiesFactory;
var mongoOperations = require("../../nodeServer/sourceCode/entitiesUtils/mongoOperations");
var userList = factory.getUserList();
var user = factory.getUserEntity();





findAllUsers()



function add(email, phone, callback) {
    var data = {
        query: {
            email: email, mobilephone: phone
        }
    };

    userList.insert(data, (err, ret) => {
        if (!err) {
            console.log("ADDED")
            callback();
        }
    })

}

function findAllUsers() {
    var data = { query: {} };
    user.find(data, (err, ret) => {
        if (err)
            return console.log("ERROR IN FIND ALL")

        console.log("1 LENGHT : " + ret.length)
        console.log(ret)
        console.log("IS ARRAY : "+(ret instanceof Array))
        var elabData = {}
        elabData.mongoObj = ret;
        elabData.properties = ["email", "mobilephone"];
        //elabData.properties = ["email"];
        var dataRet = mongoOperations.getJSONPropertiesfromMongo(elabData);

        console.log("2 LENGHT : " + dataRet.length)
        insertUserList(dataRet, dataRet.length-1);

    })
}

function insertUserList(data, index) {
    console.log("INDEX : " + index)
    console.log(data[index])
    if (index < 0)
        return console.log("END")
    else {
        add(data[index].email, data[index].mobilephone,
            () => {
                insertUserList(data, index - 1);
            });
    }
}