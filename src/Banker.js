class Banker {
    constructor(transactionDB, transactionFormatter, printer) {
        this.transactionDB = transactionDB;
        this.transactionFormatter = transactionFormatter;
        this.printer = printer;
    }

    deposit(amount, date) {
        this.transactionDB.addTransaction("deposit", amount, date);
    }

    withdraw(amount, date) {
        this.transactionDB.addTransaction("withdraw", amount, date);
    }

    printStatement() {
        const transactions = this.transactionDB.getTransactions();
        const formattedTransactions = this.transactionFormatter.format(transactions);
        this.printer.print(formattedTransactions);
    }

}

export default Banker;