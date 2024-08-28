/**
* @param {Array<any>}
* @return {Array<any[]>}
* @Question  JSON.parse
* @ProblemStatement 
**/

function parse(str) {
    if (str === '') {
        return '';
    }
    if (str[0] === "'") {
        throw Error();
    }
    if (str === 'null') {
        return null;
    }

    if (str === 'true') {
        return true;
    }

    if (str === 'false') {
        return false;
    }

    if (str === '{}') return {};
    if (str === '[]') return [];
    if (+str === +str) {
        return Number(str);
    }

    if (str[0] === '"') return str.slice(1, -1);
    // array or object ??
    if (str[0] === '[') {
        [ , null, "str"]
        return str.slice(1, -1).split(',').map((ele) => parse(ele));
    }

    if (str[0] === '{') {

        return str.slice(1, -1).split(',').reduce((acc, curr) => {
            console.log(curr)
            const idx = curr.indexOf(':')
            const key = curr.slice(0, idx)
            const value = curr.slice(idx + 1);
            // console.log(value);
            acc[parse(key)] = parse(value);
            return acc;
        }, {})

    }
}

// console.log(parse('{"a":[1],"b":{"c":1}}'))

// console.log(JSON.parse('[12,15,18]'))
// console.log(JSON.parse('{"a": 10}'))
// console.log(JSON.parse('{"a":[1], "b": {"c": 1}}'))

// console.log(Array.isArray(JSON.parse('[1,2,3]')))
// console.log(Array.isArray(parse('[1,2,3]')))

console.log(JSON.parse('"d":"BFE,dev"'))
// console.log(parse('[{"a":{"b":{"c":[1],"d":"BFE,dev"}}},null,"str"]'))


// [faild testcase] =>  
// expect(parse('[{"a":{"b":{"c":[1],"d":"BFE,dev"}}},null,"str"]'))
//   .toEqual(JSON.parse('[{"a":{"b":{"c":[1],"d":"BFE,dev"}}},null,"str"]')) 


