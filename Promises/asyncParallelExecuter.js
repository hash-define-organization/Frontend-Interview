
/**
* @param {Array<any>} promises - notice input might have non-Promises
* @return {Promise<any[]>}
* @Question Execute async functions in parallel
* @ProblemStatement Implement a function that takes a list of async functions as input and a callback function and 
* executes the input tasks in parallel i.e all at once and invokes the callback after every task is finished.
*
**/

function asyncTask() {
  const val = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(val);
    }, val)
  }
}

let list = [asyncTask(), asyncTask(), asyncTask(), asyncTask(), asyncTask()]

function executeParallel(lists, callback) {
  let results = [];
  let count = 0;
  lists.forEach((fn, idx) => {
    fn(val => {
      count++;
      results[idx] = val;
      if (count === lists.length) {
        callback(results)
      }
    })
  })


}

executeParallel(list, (val) => { console.log(val) })