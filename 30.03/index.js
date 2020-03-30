const user = {
    firstName: 'Tom',
    lastName: 'Ford',
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    },

    setFullName(fullName) {
        this.firstName = fullName.split(' ')[0];
        this.lastName = fullName.split(' ')[1];
        console.log(this.firstName);
        console.log(this.lastName);
    },

    setFullName2(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ');
        console.log(this.firstName);
        console.log(this.lastName);
    }
}

user.getFullName();
user.setFullName('Bulbazavr Morozovich');
user.setFullName2('Pikachy Bucharovich');