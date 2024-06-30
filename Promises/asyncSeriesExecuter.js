
/**
* @param {Array<any>} promises - notice input might have non-Promises
* @return {Promise<any[]>}
* @Question Execute async functions in Series
* @ProblemStatement Implement a function that takes a list of async functions as input and executes them in a series that is one at a time.} ,The next task is executed only when the previous task is completed.
*/


const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i)
  });
}

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

// Approach 1 - Using async/await
const asyncSeriesExecuter = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
}

// Approach 2 - Using recursion + Array.shift()
const asyncSeriesExecuter = function (promises) {
  let promise = promises.shift();
  promise.then((data) => {
    console.log(data);
    if (promises.length > 0) {
      asyncSeriesExecuter(promises);
    }
  });
}

// Approach 3 - Using recursion + rest operator
const asyncSeriesExecuter = function (promises) {
  const [promise, ...rest] = promises
  promise.then((data) => {
    console.log(data);
    if (rest.length > 0) {
      asyncSeriesExecuter(rest);
    }
  });
}

// Approach 4 - Using Array.reduce()
function asyncSeriesExecuter(arr) {
  arr.reduce((acc, curr) => {
    return acc.then(() => {

      return curr.then(val => console.log(val)); // 
    })
  }, Promise.resolve())
}


// Approach 5 - Using recursion
function asyncSeriesExecuter(arr) {
  const helper = (arr, idx) => {
    if (idx === arr.length) return;
    arr[idx].then((val) => {
      console.log(val);
      helper(arr, idx + 1);
    })

  }

  helper(arr, 0);
}

asyncSeriesExecuter(promises);



