export const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'John', age: 18, email: 'example@server.com' },
        { name: 'Piter', age: 21, email: 'b@server.com' },
        { name: 'Maria', age: 16, email: 'c@server.com' }
    ],
    getInvitations() {
        return this.guests.filter(({ age }) => {
            return age >= 18
        }).map(({ name, email }) => {                                              //НЕ ЗАБІВАТЬ ПРО ДЕСТРУКТУРИЗАЦИЮ !!!!!!
            return { email: email, message: `Dear ${name}! ${this.message}` }
        });
    }
}

console.log(event.getInvitations.apply(event))