class Banker {
    constructor(transactionDB, transactionFormatter, printer) {
        this.transactionDB = transactionDB;
        this.transactionFormatter = transactionFormatter;
        this.printer = printer;
    }

    deposit(amount, date) {
        this.transactionDB.addTransaction(date, "deposit", amount, this.transactionDB.balance + amount);
    }

    withdraw(amount, date) {
        this.transactionDB.addTransaction(date, "withdraw", amount, this.transactionDB.balance - amount);
    }

    printStatement() {
        const transactions = this.transactionDB.getTransactions();
        const formattedTransactions = this.transactionFormatter.format(transactions);
        this.printer.print(formattedTransactions);
    }

}

export default Banker;