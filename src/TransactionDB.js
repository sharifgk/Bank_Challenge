class TransactionDB {

    constructor() {
        this.transactions = [];
        this.balance = 0;
    }

    addTransaction(date, type, amount, balance) {
        this.transactions.push({ date, type, amount, balance });
    }

    getTransactions() {
        return this.transactions;
    }


}

export default TransactionDB;