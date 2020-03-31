export function sumOfSquares() {
    return [].reduce.apply(arguments, [(acc, num) => {
        return acc + num * num
    }, 0])
}


console.log(sumOfSquares(6, 4, 2));
// console.log([36, 16, 4].reduce((acc, num) => {
//     return acc + num
// }, 0));



export function sumOfSquares2() {
    return [...arguments].reduce((acc, num) => {
        return acc + num * num;
    }, 0)
}

console.log(sumOfSquares2(6, 4, 2));