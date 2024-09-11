const base ={
    mode: 'prod',
    config: {
        bundle: {
            splitChunks: true,
            splitVendor: true,
            entry: [],
            mode_:"ss"
        },
        testMode: {
            env: 'prod',
            unit: 'true',
            integration: true,
        },
        xyz: 123,
    }
};


const override = {
    mode: 'local',
    config: {
        bundle: {
            splitChunks: false,
            splitVendor: false,
            entry: [1,2,3],
        },
        testMode: {
            env: 'prod',
            unit: 'true',
            integration: false,
            name: "jsDom"
        },
        xyz: 123,
    }
};

// rec
// array or object top 


const deepMerge = (base, inputObject) => {
    const result = Array.isArray(base) ? [...base] : {...base};  
      for(let key in inputObject){
        if(base[key] === undefined || typeof base[key] !== 'object'){
            result[key] = inputObject[key];
        }

        if(base[key] === 'object' && inputObject[key]!=='object'){
            result[key] = inputObject[key];
        }

        if(typeof base[key] === 'object' && typeof inputObject[key] === 'object'){
            result[key]= deepMerge(base[key], inputObject[key])
        }
      }

    return result;
}

console.log(deepMerge(base, override))


