require('crypto').randomBytes(48, function(err, buffer) {  // async
    var token = buffer.toString('hex');
    console.log("1111  "+token)
  });
  console.log("xxx")
  var x = require('crypto').randomBytes(48); // sync
  console.log("2222  "+x.toString('hex'))
  console.log("xxx")