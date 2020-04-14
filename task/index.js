const dayTransactions = [
    { currency: 'USD', amount: 60, operation: 'sell' },
    { currency: 'EUR', amount: 160, operation: 'buy' },
    { currency: 'EUR', amount: 90, operation: 'sell' },
];



// //[{ currency: 'USD', amount: 60, operation: 'sell' }...]=>{USD:60}
// function getTotalBalance(trnsactionsList) {
//     const transformedTransaction = trnsactionsList.map(function (transactionObj) {
//         const key = transactionObj.currency;
//         const value = transactionObj.amount;

//         // const obj = {};
//         // if (transactionObj.operation === 'sell') {
//         //     obj[key] = -value;
//         // } else {
//         //     obj[key] = value;
//         // }

//         // obj[key] = transactionObj.operation === 'sell' ? -value : value;
//         const obj = {
//             [key]: transactionObj.operation === 'sell' ? -value : value
//         };
//         return obj;
//     });

//     const result = transformedTransaction.reduce(function (acc, transactionObj) {
//         const x = Object.assign(acc, transactionObj);
//         console.log(x);
//         console.log(x.EUR + acc)
//         return acc;
//     }, {});
//     // console.log(result)
//     return result;

// }


// function getTotalBalance(transactionsList) {
//     const result = transactionsList.reduce(function (acc, transactionObj) {
//         const { currency, amount, operation } = transactionObj;
//         const value = operation === 'buy' ? amount : -amount

//         acc[currency] = (acc[currency] || 0) + value

//         return acc;
//     }, {});

//     return result;
// }

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================

export const operationMapping = { buy: '+', sell: '-' };

export function getTotalBalance(transactionsList) {
    const result = transactionsList.reduce(function (acc, transactionObj) {
        const { currency, amount, operation } = transactionObj;
        // console.log(transactionObj)
        // console.log(acc)
        const valueStr = operationMapping[operation] + amount

        // console.log(valueStr)

        acc[currency] = (acc[currency] || 0) + +valueStr
        // console.log(acc[currency])
        return acc;
    }, {});

    return result;
}

const result = getTotalBalance(dayTransactions);
console.log(result);


function margeObjects(obj1, obj2) {

}