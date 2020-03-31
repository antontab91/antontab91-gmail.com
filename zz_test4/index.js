export const wallet = {
    transactions: [1, 5, 5, 56, 656, 23],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min.apply(null, this.transactions);
    }
}

console.log(wallet.getMax());

console.log(wallet.getMin());