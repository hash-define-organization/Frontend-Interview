

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */

function any(promiseArr) {
  if (!promiseArr.length) {
    return Promise.reject(new AggregateError('No Promise in Promise.any was resolved', []))
  }
  let result = [];
  let count = 0;
  return new Promise((res, rej) => {
    promiseArr.forEach((promise, idx) => {
      let curr = Promise.resolve(promise);
      curr.then(val => res(val)).catch(err => {
        count++;
        result[idx] = err;
        if (count === promiseArr.length) {
          rej(new AggregateError('No Promise in Promise.any was resolved', result));
        }
      });

    })

  })
}

any(["shivam", Promise.resolve(0), Promise.reject(4), Promise.reject(5)])
  .then(val => console.log(val))
  .catch(err => console.log(err));