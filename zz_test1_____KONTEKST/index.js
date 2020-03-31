export const event = {
    guests: [
        { name: 'Vitalya', age: 58 },
        { name: 'Marisha', age: 17 },
        { name: 'Petrusha', age: 35 },
        { name: 'Volodya', age: 10 }
    ],
    message: `dobro pojalovat `,
    inviteToTheParty() {
        // return this.guests.filter(({ age }) => age >= 18)

        return this.guests.filter(function (person) {
            // console.log(person.age);
            return person.age >= 18;
        }).map((person) => {
            return {
                text: `${this.message} ${person.name}  `, age: person.age
            }
        })
    }
};


// console.log(event.guests({ age }))
console.log(event.inviteToTheParty());

export const arrayWhithMethods = {
    arr: [1, 2, 3, 565, 89, 45, 12, 218548574, 524, 12, -5656, 565, 45421, 1212],
    getMax() {
        return Math.max.apply(this, this.arr);
    }
}
export const bulbazavr = {
    arr: [1, 2, 3, 565, 89, 45, 12, 218548574, 524, 12, -5656, 565, 45421, 1212],
}

function superGetMax() {
    return Math.max.apply(this, this.arr);
}

console.log(arrayWhithMethods.getMax.apply(bulbazavr))

console.log(superGetMax.apply(arrayWhithMethods))




export const objWhisArrAndMethods = {
    arr: [65, 23, 323, 56, 59689, 451, -56],
    getMin() {
        return Math.min.apply(this, this.arr);
    }

};


console.log(objWhisArrAndMethods.getMin.apply(objWhisArrAndMethods))