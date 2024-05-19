// Custom promise
// Problem Statement

// Write a function in JavaScript that works similar to the original promise.
// Promises in JavaScript allow you to execute non-blocking (asynchronous) code and 
// produce a value if the operation is successful or throws an error when the process fails.
// In short, the eventual success (or failure) of an asynchronous operation 
// and its associated value are represented by the Promise object.


class MyPromise {
  // resolve
  resolvedData;
  isResolved = false;
  resolvedChain = [];
  // reject

  rejectData;
  isRejected = false;
  rejectedChain = [];

  static resolve(value) {
    return new MyPromise((res) => res(value))
  }

  static reject(value) {
    return new MyPromise((_, rej) => rej(value))
  }
 
  constructor(exc) {
    const resolve = (val) => {
      this.resolvedData = val;
      this.isResolved = true;

      if (this.resolvedChain.length) {
        this.resolvedChain.reduce((acc, currFn) => currFn(acc), this.resolvedData)
      }

    }

    const reject = (errValue) => {
      this.rejectedData = errValue;
      this.isRejected = true;

      if (this.rejectedChain.length) {
        this.rejectedChain.reduce((acc, currFn) => currFn(acc), this.rejectedData)
      }

    }
    exc(resolve, reject)
  }

  then(fn) {
    this.resolvedChain.push(fn);
    if (this.isResolved) {
      this.resolvedData = fn(this.resolvedData);
    }
    return this;
  }

  catch (fn) {
    this.rejectedChain.push(fn);
    if (this.isRejected) {
      this.rejectedData = fn(this.rejectedData);
    }
    return this;
  } 
  
  finally(fn) {
    this.resolvedChain.push(fn);
    this.rejectedChain.push(fn);

    if (this.isResolved || this.isRejected) {
      fn()
    }
    return this;
  }

}

new MyPromise((res, rej) => {
    setTimeout(() => {
       rej(100);
     }, 1000);
    res("10");
  })
  .then(val => {
    console.log(val, "hashdefine");
    return val * 2;
  })
  .then(val => val * 2)
  .catch((val) => {
    console.log(val, "shivam")
    return val + 100
  })
  .catch(val => console.log("si", val))
  .finally(() => console.log("shivam", "finally"))
  .then(val => console.log("im", val))
  .finally(() => 12)


MyPromise.resolve(10).then(val => console.log("al", val))
MyPromise.reject(10).then(val => console.log("alll", val)).catch(err => console.log(err))
