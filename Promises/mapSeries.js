// Implement mapSeries async function
// Problem Statement -
// Implement a mapSeries async function that is similar to the Array.map() but returns a promise that resolves on the list of output by mapping each input through an asynchronous iteratee function or rejects it if any error occurs. The inputs are run in a sequence that is one after another.
// The asynchronous iteratee function will accept an input and a callback. The callback function will be called when the input is finished processing, the first argument of the callback will be the error flag and the second will be the result.