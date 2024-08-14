/**
@Polyfill
Object.myCreate
@Definition
Is used to create a new object using an existing object as the prototype of the newly created object.
@Syntax
Object.myCreate(proto, propertiesObject);
@Approach
new keyword usage:
The new keyword is used to create an instance of function F. Because F is a constructor function (albeit an empty one), using new F() creates a new object. 
**/



Object.prototype.myCreate = function (obj) {
    if (obj === null || typeof obj !== 'object') {
        throw new TypeError("Object myCreate callled on non-object");
    }

    function F() { }
    F.prototype = obj;

    return new F();
}



const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.myCreate(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction(); // "My name is Matthew. Am I human? true"