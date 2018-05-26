var dbError = require('../sourceCode/error/dbError').DBError;

var err = dbError.generate()
console.log(err.message)
console.log(err.code)
err = dbError.generate("xxxx")
console.log(err.message)
console.log(err.code)


