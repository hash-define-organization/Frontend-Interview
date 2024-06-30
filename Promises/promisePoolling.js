// Leetcode : Promise Pool
// Given an array of asyncronous functions functions and a pool limit n, return an asyncronous function promisePool. It should return a promise that resolves when all the input functions resolve.

// Pool limit is defined as the maximum number promises that can be pending at once. promisePool should begin execution of as many functions as possible and continue executing new functions when old promises resolve. promisePool should execute functions[i] then functions[i + 1] then functions[i + 2], etc. When the last promise resolves, promisePool should also resolve.

// For example, if n = 1, promisePool will execute one function at a time in series. However, if n = 2, it first executes two functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.

// You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value.

// Example 1:
// Input: 
// functions = [
//   () => new Promise(res => setTimeout(res, 300)),
//   () => new Promise(res => setTimeout(res, 400)),
//   () => new Promise(res => setTimeout(res, 200))
// ]
// n = 2
// Output: [[300,400,500],500]
// Explanation:
// Three functions are passed in. They sleep for 300ms, 400ms, and 200ms respectively.
// At t=0, the first 2 functions are executed. The pool size limit of 2 is reached.
// At t=300, the 1st function resolves, and the 3rd function is executed. Pool size is 2.
// At t=400, the 2nd function resolves. There is nothing left to execute. Pool size is 1.
// At t=500, the 3rd function resolves. Pool size is zero so the returned promise also resolves.
// Example 2:
// Input:
// functions = [
//   () => new Promise(res => setTimeout(res, 300)),
//   () => new Promise(res => setTimeout(res, 400)),
//   () => new Promise(res => setTimeout(res, 200))
// ]
// n = 5
// Output: [[300,400,200],400]
// Explanation:
// At t=0, all 3 functions are executed. The pool limit of 5 is never met.
// At t=200, the 3rd function resolves. Pool size is 2.
// At t=300, the 1st function resolved. Pool size is 1.
// At t=400, the 2nd function resolves. Pool size is 0, so the returned promise also resolves.
// Example 3:
// Input:
// functions = [
//   () => new Promise(res => setTimeout(res, 300)),
//   () => new Promise(res => setTimeout(res, 400)),
//   () => new Promise(res => setTimeout(res, 200))
// ]
// n = 1
// Output: [[300,700,900],900]
// Explanation:
// At t=0, the 1st function is executed. Pool size is 1.
// At t=300, the 1st function resolves and the 2nd function is executed. Pool size is 1.
// At t=700, the 2nd function resolves and the 3rd function is executed. Pool size is 1.
// At t=900, the 3rd function resolves. Pool size is 0 so the returned promise resolves.


// Constraints:
// 0 <= functions.length <= 10
// 1 <= n <= 10



const p0 = new Promise((resolve) => {
  setTimeout(() => resolve(1000), 9000)
})

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve(2000), 6000)
})
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(3000), 1000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(4000), 1000)
})
const p4 = new Promise((resolve) => {
  setTimeout(() => resolve(5000), 1000)
})
const p5 = new Promise((resolve) => {
  setTimeout(() => resolve(6000), 1000)
})


const promises = [p0, p1, p2, p3, p4, p5];
function pool(lists, size) {
  let st = Date.now();
  return new Promise((resolve) => {
    let curr = 0;
    let si = 0;
    let results = [];
    let dis = 0;
    function helpers() {
      if (curr >= lists.length) {
        let ei = Date.now();
        return resolve({ res: results, time: ei - st, dis: dis });
      }
      while (si < size && curr < lists.length) {
        si++;
        lists[curr++].then((val) => {
          results.push(val);
          dis += val;
          si--;
          helpers();
        }).catch((err) => console.log(err, "Err pooling"))
      }
    }
    helpers();
  })

}

(async () => {
  const res = await pool(promises, 2)
  console.log(`pooling`, res)
})()

