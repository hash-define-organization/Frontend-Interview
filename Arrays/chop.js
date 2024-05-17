 /**
 * @param {Array<any>}
 * @return {Array<any[]>}
 * @Question  Chop array into chunks of given length
 * @ProblemStatement Write a function to chop an array into chunks of a given length and return each chunk as an array without modifying the input array.
 **/

// Example
// Input:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 3
// Output:
// [[1,2,3], [4,5,6], [7,8,9], [10]]

// Approach 1 - Using slice

Array.prototype.chop = function(limit){
  let result= [];
  for(let i=0; i<this.length; i+=limit){
    result.push(this.slice(i, i+limit));
  }
  return result;
}

// Approach 2 - Using recursion
Array.prototype.chop = function (size){
  let result = [];
  let chunk = [];

  for (let i = 0; i < this.length; i++) {
      chunk.push(this[i]);
      if(chunk.length == size) {
          result.push(chunk);
          chunk = [];
        }
    }

  if (chunk.length > 0) {
      result.push(chunk);
  }

  return result;
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const output = arr.chop(3);
console.log(output);