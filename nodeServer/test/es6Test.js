"use strict"
/************** OLD SINTAX   *****************/

// this is the basic class Person
function Person(name,surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

// with prototype is possibile to add a field to each Person
Person.prototype.printFullName = function() {
    console.log(this.name+" "+this.surname);
}

// the following is a static method
Person.older = function(person1, person2) {
   return (person1.age > person2.age) ? person1 : person2
}


var p1 = new Person("xxx","yyy",12);
var p2 = new Person("zzz","kkk",25)
var p3 = Person.older(p1,p2);

p1.printFullName();
p2.printFullName();
p3.printFullName();

p2.printAge = function() {   // in this way thee method is added only to istance p2
    console.log("age: "+this.age)
}

//p1.printAge(); // it is not a function
p2.printAge();
//p3.printAge(); // it is not a function

Person.prototype.newPrintAge = function() { // methos added to the prototype
    console.log("New age: "+this.age)
}

p1.newPrintAge();
p2.newPrintAge();
p3.newPrintAge();

/************** ES6 SINTAX   *****************/
// es6 is just a new sintax, behind the implementation is the same as the old way
class es6Person {
    constructor(name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    printFullName() {
        console.log(this.name+" "+this.surname);
    }

    static older(person1, person2) {
        return (person1.age > person2.age) ? person1 : person2
     }
}

p1 = new es6Person("xxx","yyy",12);
p2 = new es6Person("zzz","kkk",25)
p3 = es6Person.older(p1,p2);

p1.printFullName();
p2.printFullName();
p3.printFullName();

// inheracies

class extendedEs6Person extends Person {   // NOTE: extend Person! this prove that es6 is just a sintax
    constructor(name, middlename, surname,age){
        super(name,surname,age); // can use super
        this.middlename = middlename;
    }

    printFullName() {
        console.log(this.name+" "+this.middlename+" "+this.surname);
    }

}

var p4 = new extendedEs6Person("aaa","bbb","ccc", 35);

p4.printFullName();
p4.newPrintAge();

var p5 = extendedEs6Person.older(p4,p3);

p5.printFullName();
p5.newPrintAge();

extendedEs6Person.prototype.randomPrint = function() {
    console.log("RANDOM PRINT");
}

var p0 = new Person("vvv","nnn",17);
p5.randomPrint();
// p0.randomPrint(); // this is not alowed because randomPrint is only in the Extende class and not in the base class
