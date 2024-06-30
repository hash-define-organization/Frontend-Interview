
// using counter method
function once(fn) {
    let count = 0;
    let ran;
    return function (...args) {
        if (count === 0) {
            ran = fn.apply(this, args);
        }
        count++;
        return ran;
    }
}


function _once(fn) {
    let ran; // store value
    return function (...args) {
        if (fn) {
            ran = fn.apply(this, args);
            fn = null;
        }
        return ran;
    }
}

let i = 0;
const fn = () => {
    i++;
    return i;
}
const init = _once(fn);
console.log(init(1));
console.log(init(2));
console.log(init(2));
