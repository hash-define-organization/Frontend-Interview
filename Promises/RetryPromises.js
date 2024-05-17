
 /**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 * @Question  Retry promises N number of times
 * @ProblemStatement Implement a function in JavaScript that retries promises N number of times with a delay between each call.
 **/

// Input:
// retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed');

// Output:
// ... attempt 1 -> failed
// ... attempt 2 -> retry after 50ms -> failed
// ... attempt 3 -> retry after 50ms -> failed
// ... Failed.


// wait function

const wait = (ms) => new Promise((resolve) =>setTimeout(()=> resolve(), ms));

const getCount = () => {
  let c = 0; 1
  return async ()=> {
    c++;
    if(c < 2){
      throw new Error("Failed to get");
    }
  }
}

// async function retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed'){
//   try{ 
//     await asyncFn();
//   }
//   catch(err){
//     console.log(retries, "F")
//     if(retries <=0){
//       return Promise.reject(finalError);
//     }
//     // wait for delay time 
//     await wait(delay);
//     return retry(asyncFn, retries - 1, delay, finalError);
//   }
// }


// const test= async () =>{
//   await retry(getCount(), 3)
//   console.log("success")
// }

// test().catch(error => console.log("error", error));


function retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed'){
  return new Promise((resolve, reject) =>{
    return asyncFn().then(resolve).catch(err => {
      console.log("shivam", retries);
      if(retries > 0){
       return wait(delay).then(retry(asyncFn, retries - 1, delay, finalError)).then(resolve).catch(reject);
      }else{
       return reject(finalError);
      }

    })
  })
}

const test = async () =>{
  await retry(getCount(), 3)
  console.log("success")
}

test().catch(error => console.log("error"));



