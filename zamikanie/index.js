function plusOne(n) {
    return function () {
        return n + 1;
    };
}

let fivePlusOne = plusOne(5);
let sevenPlusOne = plusOne(7);
console.log(fivePlusOne());
console.log(sevenPlusOne());

function multiply(n) {
    return function (m) {
        return n * m;
    };
}

let multiplyFive = multiply(5);
console.log(multiplyFive(7));
console.log(multiplyFive(4));

function getUrl(url) {
    return function (name) {
        return `${name}.${url}`;
    };
}

let getComSites = getUrl('com');
console.log(getComSites('google'));
console.log(getComSites('netflix'));
console.log(getComSites('news'));



// Написать функцию bind  
// пример работы:

function logPerson() {
    console.log(`Person: ${this.name} ${this.age} ${this.job}`);
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' };
const person2 = { name: 'Елена', age: 27, job: 'SMM' };

// function bind(func) {
//     return function (obj) {

//     }
// }

// bind(person1, logPerson);
// bind(person2, logPerson);