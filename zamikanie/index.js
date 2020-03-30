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