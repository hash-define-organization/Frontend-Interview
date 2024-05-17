

 /**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 * @Question Imlement MapLimiter polyfill without callback
 * @ProblemStatement let suppose you have 10 promises in array and there is a limiter example 2, then promises will run in batches of two.
 *
 **/



const p0 = new Promise((resolve) =>{
  setTimeout(() => resolve(1000), 9000)
})

const p1 = new Promise((resolve) =>{
  setTimeout(() => resolve(2000), 6000)
})
const p2 = new Promise((resolve) =>{
  setTimeout(() => resolve(3000), 1000)
})
const p3 = new Promise((resolve) =>{
  setTimeout(() => resolve(4000), 1000)
})
const p4 = new Promise((resolve) =>{
  setTimeout(() => resolve(5000), 1000)
})
const p5 = new Promise((resolve) =>{
  setTimeout(() => resolve(6000), 1000)
})

let arr= [p0, p1, p2, p3, p4, p5];
let size= 3;

// function
function mapLimit(promises, limit){

}


// Approach 1 : Deewanshi Bansal
async function mapLimit(promiseArr, sz) {
    let results = [];
    for (let i = 0; i < promiseArr.length; i += sz) {
        let temp = promiseArr.slice(i, i + sz);
        let res = await Promise.all(temp);
        results.push(res);
    }
    return results;
}

// Approach 2: Archit Jain
function mapLimit(promises, limit) {
  function chunkArray(arr, size) {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  }

  const chunks = chunkArray(promises, limit);
  Promise.all(chunks.map(chunk => Promise.all(chunk)))
    .catch(error => console.error(error));
}



















