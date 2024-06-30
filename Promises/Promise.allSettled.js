/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promiseArr) {
  // your code here
  if (!promiseArr.length) {
    return Promise.resolve([]);
  }
  let result = [];
  let count = 0;
  return new Promise(res => {
    promiseArr.forEach((promise, idx) => {
      const curr = Promise.resolve(promise);
      curr.then(val => {
        result[idx] = {
          status: "fulfilled",
          value: val,
        }
      }).catch(err => {
        result[idx] = {
          status: "rejected",
          reason: err,
        }
      }).finally(() => {
        count++;
        if (count === promiseArr.length) {
          res(result);
        }
      })
    })
  })
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const p0 = [];
const p1 = "shivam";
const promises = [promise1, promise2, p0, p1];

allSettled(promises)
  .then((results) => console.log(results))

