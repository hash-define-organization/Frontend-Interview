
// Execute promises with the Priority

// Problem Statement:


// Given a list of promises and their priorities, call them parallelly and 
// resolve with the value of the first promise with the most priority. 
// If all the promises fail then reject with a custom error.




// const list = [

//   {status: 'resolve', priority: 4},
//   {status: 'reject', priority: 6},
//   {status: 'resolve', priority: 5},
//   {status: 'reject', priority: 2},
//   {status: 'resolve', priority: 3},
//   {status: 'reject', priority: 1},
// ]


// Approach 1 : Deewanshi Bansal
function solve(list) {
  let cnt = 0;
  let reso = [];
  let reje = [];

  return new Promise((resolve) => {
    list.forEach(item => {
      setTimeout(() => {
        if (item.status === 'resolve') {
          reso.push(item);
        }
        if (item.status === 'reject') reje.push(item);
        cnt++;
        if (cnt === list.length) {
          resolve({ reso, reje });
        }
      }, item.priority * 1000);
    });
  });
}

solve(list).then(result => {
  if (reje.length == list.length) {
    console.log(result.reje);
  }
  else {
    console.log(result.reso);
  }
});

const promises = [
  { status: 'resolve', priority: 4 },
  { status: 'reject', priority: 1 },
  { status: 'resolve', priority: 2 },
  { status: 'reject', priority: 3 }
];


resolvePromisesWithPriority(promises);


function asyncTask(p) {
  const val = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val < 7) {
        reject({ value: val, message: p });
      } else {
        resolve({ value: val, message: p });
      }
    }, val * 100)
  })
}


const list = [
  { task: asyncTask(5), priority: 5 },  // [1: 10]
  { task: asyncTask(3), priority: 3 },  // [2: 1]
  { task: asyncTask(2), priority: 2 },
  { task: asyncTask(2), priority: 2 },
  { task: asyncTask(1), priority: 1 },
]

function resolvePromiseWithPriority(promiseArr) {
  promiseArr.sort((a, b) => a.priority - b.priority);
  let result = {};
  let success = {};
  let count = 0;
  return new Promise((res) => {
    promiseArr.forEach((promise) => {
      const { task, priority } = promise;
      task.then(val => {
        success[priority] = { val: val, priority: priority };
        res({ failed: result, success: success });
      }).catch(err => {
        if (result[priority] === undefined) {
          result[priority] = [{ val: err, priority: priority }]
        } else {
          result[priority] = [...result[priority], { val: err, priority: priority }]
        }
      }).finally(() => {
        count++;
        if (count === promiseArr.length) {
          res(result)
        }
      })
    })

  })
}

resolvePromiseWithPriority(list).then((val => console.log(val)));

