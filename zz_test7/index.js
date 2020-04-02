const dayTransactions = [
    { currency: 'USD', amount: 60, operation: 'sell' },
    { currency: 'EUR', amount: 160, operation: 'buy' },
    { currency: 'EUR', amount: 90, operation: 'sell' },
];


//[{ currency: 'USD', amount: 60, operation: 'sell' }...]=>{USD:60}
function getTotalBalance(trnsactionsList) {
    const transformedTransaction = trnsactionsList.map(function (transactionObj) {
        const key = transactionObj.currency;
        const value = transactionObj.amount;

        // const obj = {};
        // if (transactionObj.operation === 'sell') {
        //     obj[key] = -value;
        // } else {
        //     obj[key] = value;
        // }

        // obj[key] = transactionObj.operation === 'sell' ? -value : value;
        const obj = {
            [key]: transactionObj.operation === 'sell' ? -value : value
        };
        return obj;
    });

    const result = transformedTransaction.reduce(function (acc, transactionObj) {
        console.log(transactionObj);
        Object.assign(acc, transactionObj);
        return acc;
    }, {});
    return result;
}

const result = getTotalBalance(dayTransactions);
console.log(result);

