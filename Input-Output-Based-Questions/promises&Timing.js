// Steps - 
// 1. run synchronously if any .then come .then put it microtask move forward if any setTimout come put its callback in macro or callback then move forward 
// 2. pick micro first and then pick macro if any promise and set timout come repeat 1.
// 
// use link  - https://plainenglish.io/blog/6-interview-questions-that-combine-promise-and-settimeout-34c430fc297e#process-analysis

/* 1- 
 async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});

console.log('script end');

//  callback -> 14 micro -> 4, 24
// script start   
// async1 start
// async2
// promise1
// script end
// async1 end
// promise 2
// setTimeout

*/


// ----------------------------------------------- //



/* 2-
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);
Promise.resolve()
.then(function () {
console.log('promise1');
})
.then(function () {
console.log('promise2');
});
console.log('script end');

// Micro -> 44 callback -> 41
// script start
// script end
// promise1
// promise2
// setTimeout
*/


// ----------------------------------------------- //


/*
console.log('first');
setTimeout(() => {
    console.log('setTimout')
}, 0);
fetch('https://www.google.com')
.then(res => console.log('response'))
console.log('last');

// Macro -> setTimout, axios.get (because it's done on browser as normal jscode and have lower priority then timing api) // micro - response
// first
// last
// settimout
// response
*/


// ----------------------------------------------- //

/* 
const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
  });
  
  promise1.then(() => {
    console.log(3);
  });
  
  console.log(4);

// 1
// 4
// 3
*/


// ----------------------------------------------- //

/* 

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
  });
  
  promise1.then(() => {
    console.log(3);
  });
  
  console.log(4);

// 1
// 4
// console.log(3 will always in pending state)

*/

// ----------------------------------------------- //


/*
const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve('resolve1')
})

const promise2 = promise1.then(res => {
  console.log(res)
})

console.log('promise1:', promise1);
console.log('promise2:', promise2);

// 1
// Promise1: Promise {<fulfilled>: 'resolve1'}
// promise2:  Promise { <pending> }
// resolve 1
*/

// ----------------------------------------------- //


/*
const fn = () => (new Promise((resolve, reject) => {
  console.log(1)
  resolve('success')
}));
fn().then(res => {
  console.log(res)
});
console.log(2)

// 1
// 2
// success
*/


// ----------------------------------------------- //

/*
console.log('start')
setTimeout(() => {
  console.log('setTimeout')
})
Promise.resolve().then(() => {
  console.log('resolve')
})
console.log('end')
// start
// end
// resolve
// setTimout
*/

// ------------------------------------------------ //


/*
const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log("timerStart");
        resolve("success");
        console.log("timerEnd");
    }, 0);
    console.log(2);
});
promise.then((res) => {
    console.log(res);
});
console.log(4);

// 1 
// 2
// 4
// timeStart
// timerEnd
// success
*/


// ------------------------------------------------ //

/*
const timer1 = setTimeout(() => {
  console.log('timer1');
  const timer3 = setTimeout(() => { 
      console.log('timer3')
    }, 0)
}, 0)
const timer2 = setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start');

// start
// timer1
// timer2
// timer3
*/

// ------------------------------------------------ //

/*
const timer1 = setTimeout(() => {
  console.log('timer1');
  const promise1 = Promise.resolve().then(() => {
    console.log('promise1')
  })
}, 0)
const timer2 = setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')

// start
// timer1
// promise1
// timer2
*/

// ------------------------------------------------ //

/*
const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start');

// start
// promise1
// timer1
// promise2
// timer2
*/

// ------------------------------------------------ //
/*
const promise1 = new Promise((resolve, reject) => {
  const timer1 = setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})

console.log('promise1', promise1)
console.log('promise2', promise2)

const timer2 = setTimeout(() => {
  console.log('promise1', promise1);
  console.log('promise2', promise2);
}, 2000)

// promise1 Promise { <pending> }
// promise2 Promise { <pending> }
//   throw new Error('error!!!')
// promise1 Promise {<fulfilled>: 'success'}
// Promise {<rejected>: Error: error!!! at <anonymous>:7:9}
*/

// ------------------------------------------------ //

/*
new Promise(res => {
  console.log('hello 4');
  setTimeout(() => {
      res('hello 6')
      console.log('hello 5');
  })
}).then(v => console.log(v))
*/


// ------------------------------------------------ //

/*
console.log('1');
const func1 = async() => {
    await console.log('2');
    console.log('3');
}
func1();
console.log('4');
1
2
4
3
*/