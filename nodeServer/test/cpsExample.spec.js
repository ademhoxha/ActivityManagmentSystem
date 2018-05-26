/* CPS = Continuation passing style 
 It's the main metodology to deal wih asyncronous operation, but can used is syncronous operatio to
 Consist to pass a callBack as an argument that elaborate the result of the funzion
*/


// syncronous example of add and printing
function addSync(a, b, callback) {
    let result = a+b;
    callback(result);
}

addSync(2,3, (x) => { console.log("The sum is: "+x) }); // note that we have used the arrow function (that implies the closure context) just for reducing the syntax

// asyncronous example of add and printing

function addAsync(a ,b ,callback) {
    let result = a+b;
    setTimeout(() => callback(result), 100);
}


console.log("Start");
addAsync(2,3, (x) => { console.log("The sum is: "+x) });
console.log("End");
// this will print Start ;  End  ; The sum is: 5 because setTimeout is approced by node like an async event that have a node callback

// Node has the nextTick to allow the execution only at the next tick and not to thee corrent tick
function addAsyncNextTick(a ,b ,callback) {
    let result = a+b;
    process.nextTick(() => callback(result));
}

console.log("Start");
addAsyncNextTick(5,7, (x) => { console.log("The sum is: "+x) });
console.log("End");