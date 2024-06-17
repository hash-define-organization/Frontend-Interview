const func = (...args) => args

function partial(fn, ...args){
    return function(...args1){
          let argsR=[]; 
        for(const arg of args){
            if(arg===partial.placeholder ){
                argsR.push(args1.shift()); // 1
            }else{
                argsR.push(arg);
            }

        }
        
        if(args1.length){
            argsR.push(...args1);
        }
        return fn.apply(this, argsR);
    }
}
partial.placeholder = Symbol();
const _= partial.placeholder;

const func123 = partial(func, 1,_,3)
console.log(func123(2, 4))
// [1,2,3,4]



// /**
//  * @param {Function} func
//  * @param {any[]} args
//  * @returns {Function}
//  */
// function partial(fn, ...args) {
//     return function(...args2){
//       const args1= args2.reverse(); 
//             let argsR=[];
//           for(const arg of args){
//               if(arg===partial.placeholder ){
//                   argsR.push(args1.pop());
//               }else{
//                   argsR.push(arg);
//               }
//           }
//           if(args1.length){
//               argsR.push(...args1?.reverse());  O(2n + 1)
//           }
//           return fn.apply(this, argsR);
//   }
//   }
  
//   partial.placeholder = Symbol();