class TransactionDB {

    constructor() {
        this.transactions = [];

    }

    addTransaction(type, amount, date) {
        this.transactions.push({ type, amount, date });
    }

    getTransactions() {
        return this.transactions;
    }


}

export default TransactionDB;