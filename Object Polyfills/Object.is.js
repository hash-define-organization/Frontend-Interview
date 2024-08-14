/**
@Polyfill
Object.myIs
@Definition
 static method determines whether two values are the same value. 
 A boolean indicating whether or not the two arguments are the same value.
@Syntax
Object.myIs(value1, value2);
@Approach
1. two if conditions
2. one is for NaN (x!==x && y!==y)
3. second if is for +0 and -0 (1/x === 1/y)
4. return x === y
**/

Object.prototype.myIs = function (x, y) {
  // NaN special case 
  if (x !== x && y !== y) return true;

  // -0 , +0
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y;
  }

  return x === y;
}



console.log(Object.myIs('1', 1));
// Expected output: false
console.log(Object.myIs(NaN, NaN));
// Expected output: true
console.log(Object.myIs(-0, -0));
// Expected output: false
const obj = {};
console.log(Object.myIs(obj, {}));
// Expected output: false
