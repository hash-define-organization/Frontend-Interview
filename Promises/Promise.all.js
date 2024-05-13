
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */

function all(promiseArr) {
  // your code here
  if (!promiseArr.length) {
    return Promise.resolve([])
  }
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, idx) => {
      const currPromise = promise instanceof Promise ? promise : Promise.resolve(promise);
      currPromise.then(val => {
        count++;
        result[idx] = val;
        if (count === promiseArr.length) {
          resolve(result);
        }
      }).catch(err => reject(err));
    })

  })
}


const myPromise0 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo-0");
  }, 300);
});
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo-1");
  }, 300);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo-2");
  }, 300);
});

const p0 = Promise.resolve("Shivam");
const p1 = null;
const p2 = "Shivam";


all([myPromise0, myPromise1, myPromise2, p0, p1, p2])
  .then(res => console.log(res))
  .catch(err => console.error(err, "err"))


