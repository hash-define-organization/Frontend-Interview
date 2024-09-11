const sales = [{
    fruit: 'apple', 
    region: 'north',
    month: 'January',
    quantity: 3
},
{
    fruit: 'banana',
    region: 'south',
    month: 'January',
    quantity: 2
},
{
    fruit: 'apple',
    region: 'north',
    month: 'February',
    quantity: 1
},
{
    fruit: 'banana',
    region: 'east',
    month: 'February',
    quantity: 4
},
{
    fruit: 'orange',
    region: 'south',
    month: 'January',
    quantity: 1
},
{
    fruit: 'apple',
    region: 'south',
    month: 'January',
    quantity: 5
},
{
    fruit: 'banana',
    region: 'south',
    month: 'February',
    quantity: 1
},
{
    fruit: 'orange',
    region: 'east',
    month: 'February',
    quantity: 3
},
{
    fruit: 'apple',
    region: 'north',
    month: 'January',
    quantity: 2
},
{
    fruit: 'banana',
    region: 'east',
    month: 'January',
    quantity: 1
},
];

// Output:
// {
//   apple: { north: { January: 5, February: 1 }, south: { January: 5 } },
//   banana: { south: { January: 2, February: 1 }, east: { February: 4,   January: 1 } },
//   orange: { south: { January: 1 }, east: { February: 3 } }
// }
function groupBy(data){
    const result = {};

    data.forEach(sale => {

        const {fruit, region, month, quantity} = sale;
        if(!result[fruit]){
            result[fruit]={}
        }

        if(!result[fruit][region]){
            result[fruit][region]={}
        }

        if(!result[fruit][region][month]){
            result[fruit][region][month]= 0; 
        }

        result[fruit][region][month]+=quantity;
        
    });
    return result;

}

console.log(groupBy(sales))