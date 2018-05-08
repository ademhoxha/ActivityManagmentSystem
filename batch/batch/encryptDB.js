

class encryptDBBatch extends BaseBatch {

    run(){

    }
}

var data = { query: {} }

//StartBatch()
find()

function find() {
    secretEntity.find(data, (err, ret) => {
        if (err)
            return console.log("ERROR IN FIND " + err)
        else {
           console.log("ELEMENTS: "+ret)
        }
    })
}

function StartBatch() {
    entity.find(data, (err, ret) => {
        if (err)
            return console.log("ERROR IN FIND " + err)
        else {
            i = 0;
            addInSecretForm(ret, i, ret.length);
        }
    })
}

function addInSecretForm(ret, i, length) {
    if (i < length) {
        var retData = {}
        retData.query = ret[i].toObject();
        entity.remove(retData, (err, ret1) => {
            if (err)
                return console.log("ERROR IN REMOVE: i=" + i + "   error" + err)
            console.log("*****  ELEMENT i="+i+" REMOVED *****")
            delete retData.query._id; // REMOVE ID for new ADD
            secretEntity.insert(retData, (err1, ret2) => {
                if (err1)
                    return console.log("ERROR IN ADD SECRET: i=" + i + "   error" + err1)
                else {
                    console.log("*****  ELEMENT i="+i+" ADDED IN A SECRET WAY*****")
                    addInSecretForm(ret, i + 1, length);
                }
            })
        })
    }
    else
        console.log("ALL ADDED");
}