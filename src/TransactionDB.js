class TransactionDB {

    constructor() {
        this.transactions = []; //initialize the empty array for transactions

    }

    addTransaction(type, amount, date) {
        this.transactions.push({ type, amount, date }); //add a new transaction to the array
    }

    getTransactions() {
        return this.transactions; // return all transactions from the array
    }


}

export default TransactionDB;