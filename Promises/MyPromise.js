class MyPromise {
    resolveData = null;
    isResolved = false;
    thenFunctionChain = [];

    rejectData = null;
    isRejected = false;
    catchFunctionChain = [];

    static resolve(value) {
        return new MyPromise((res) => res(value));
    }

    static reject(value) {
        return new MyPromise((_, rej) => rej(value));
    }

    static any(promises) {
        if (!promises.length) {
            return MyPromise.reject(new AggregateError([], "No promises provided"));
        }

        return new MyPromise((resolve, reject) => {
            let rejections = [];
            let resolved = false;
            let pendingCount = promises.length;

            promises.forEach((promise, index) => {
                MyPromise.resolve(promise)
                    .then((value) => {
                        if (!resolved) {
                            resolved = true;
                            resolve(value);
                        }
                    })
                    .catch((error) => {
                        rejections[index] = error;
                        pendingCount--;
                        if (pendingCount === 0 && !resolved) {
                            reject(new AggregateError(rejections, "All promises were rejected"));
                        }
                    });
            });
        });
    }

    constructor(executor) {
        if (typeof executor !== "function") {
            throw new TypeError("Executor must be a function");
        }

        const resolve = (value) => {
            queueMicrotask(() => {
                this.resolveData = value;
                this.isResolved = true;
                if (this.thenFunctionChain.length) {
                    this.thenFunctionChain.reduce((acc, fn) => fn(acc), this.resolveData);
                }
            });
        };

        const reject = (value) => {
            queueMicrotask(() => {
                this.rejectData = value;
                this.isRejected = true;
                if (this.catchFunctionChain.length) {
                    this.catchFunctionChain.reduce((acc, fn) => fn(acc), this.rejectData);
                }
            });
        };

        executor(resolve, reject);
    }

    then(fn) {
        this.thenFunctionChain.push(fn);
        if (this.isResolved) {
            queueMicrotask(() => {
                this.resolveData = fn(this.resolveData);
            });
        }
        return this;
    }

    catch(fn) {
        this.catchFunctionChain.push(fn);
        if (this.isRejected) {
            queueMicrotask(() => {
                this.rejectData = fn(this.rejectData);
            });
        }
        return this;
    }
}

// Testing
console.log("shivam");
MyPromise.any([
    MyPromise.resolve("Error 1"),
    MyPromise.resolve("Error 2"),
    MyPromise.resolve("Success"),
])
    .then((value) => console.log("Resolved with:", value))
    .catch((err) => console.log("Rejected with:", err));

MyPromise.any([
    MyPromise.reject("Error A"),
    MyPromise.reject("Error B"),
    MyPromise.reject("Error C"),
])
    .then((value) => console.log("Resolved with:", value))
    .catch((err) => console.log("Rejected with:", err));

console.log("MyPromise");
