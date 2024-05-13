
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */

function race(promiseArr) {
  return new Promise((res, rej) => {
    promiseArr.forEach(promise => {
      const currPromise = Promise.resolve(promise);
      currPromise.then(res).catch(rej)
    })

  })
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 50, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

race(["shivam", promise1, promise2]).then((value) => {
  console.log(value);
 }, (err)=> {
  console.error(err);
 })
