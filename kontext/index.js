const person = {
    name: 'Vova',
    age: 29,
    logInfo(job, phone) {
        console.log(`name:${this.name} age:${this.age} job is ${job} phone is ${phone}`);
    }
};

const lena = {
    name: 'Lena',
    age: 25
};

const vika = {
    name: 'vika',
    age: 30
};
const misha = {
    name: 'misha',
    age: 28
};


person.logInfo('elektik', "45-87-1");

person.logInfo.bind(lena)();
person.logInfo.bind(vika)('babysitter', "35-445-45");

const fnMishaInfo = person.logInfo.bind(misha);
fnMishaInfo('frontend', "45-454-541")



person.logInfo.apply(lena, ['smm', '454-45-12']);
person.logInfo.call(lena, 'smm', '454-45-12');

// --------------------------------------------------------


let arr = [1, 2, 3, 4, 5];
function multBy(arr, num) {
    return arr.map(function (i) {
        return i * num;
    });
}

console.log(multBy(arr, 5));

Array.prototype.multBy2 = function (num) {
    return this.map(function (i) {
        return i * num;
    });
}

console.log(arr.multBy2(2))