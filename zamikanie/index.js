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


function multiply2(num) {
    return function (factor) {
        return num * factor;
    }
}
let multiplier = multiply2(2);
console.log(multiplier(45));

function endUrlAdder(endUrl) {
    return function (siteName) {
        return `${siteName}.${endUrl}`;
    };
}

let addComToEnd = endUrlAdder('com');
console.log(addComToEnd('pornhub'))



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Написать функцию bind  
// пример работы:

function logPerson(a, b) {

    console.log(`Person: ${this.name} ${this.age} ${this.job} ${a} ${b}`);
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' };
const person2 = { name: 'Елена', age: 27, job: 'SMM' };

function bind(context, func, ...xz) {
    console.log(...xz)
    return function (...arg) {
        console.log(...arg)
        return func.apply(context, [...xz, ...arg]);
    };
}




let test1 = bind(person1, logPerson, "аргумент хз", 454, 4545);
test1(54, 78)
// bind(person2, logPerson)('аргумент в обертке');