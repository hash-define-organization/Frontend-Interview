/*
var foo = function foo() {
    console.log(foo === foo); 
};
foo();
// true 
*/

// ----------------------------------------------- //

/*
function aaa() {
    return
    {
        test: 1
    };
}
console.log(typeof aaa());
// undefined - as return is not written properly
*/

// ----------------------------------------------- //

/*
function bar() {
    return foo;
    foo = 10;
    function foo() { }
    var foo = '11';
}
console.log(typeof bar());

// function as foo hoisted because it's function declartion
*/

// ----------------------------------------------- //
/*
var x = 3;
var foo = {
 x: 2,
  baz: {
    x: 1,
    bar: function() {
      return this.x;
    }
  }
}
var go = foo.baz.bar;
console.log(go()); 
// console.log(foo.baz.bar());
// 3
// 1
*/


// ----------------------------------------------- //

/*
function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
}

sayHi();
// undefined
// reference error
*/

// ----------------------------------------------- //


// function sayHelloWorld() {
//   var sayGoodbyeWorld = function() {
//    return "Hello, World!";
//   };
//  function sayGoodbyeWorld() {
//    return "Goodbye, World!";
//   }
//   console.log(sayGoodbyeWorld())
// }
// console.log(sayHelloWorld());

// ----------------------------------------------- //

// foo()

// function foo() {
//     console.log(1)
// }

// var foo = function(){
//     console.log(2)
// }

// function foo() {
//     console.log(3)
// }

// foo()

// ----------------------------------------------- //


let user = {
    name: 'shivam',
    age: 20,
    sayHi() {
        console.log(this.name);
        console.log(user.name);
    }
  }
  
  const admin = user;
  user = null;
  admin.sayHi()

  // shivam
  // cannot reade property name of undefinded --> ref error

// ----------------------------------------------- //

// (function() {
//     var a=b=1;
// })();
// console.log(a); // reference error as a is not defined and iffe has local scope of its own
// console.log(b); // 1



// extra: 
// https://github.com/lydiahallie/javascript-questions