class Banker {
    constructor(transactionDB, transactionFormatter, printer) {             // The constructor will take all the objects required to run the final Banker object
        this.transactionDB = transactionDB;                                 // This avoids directly injecting other classes for this program to work
        this.transactionFormatter = transactionFormatter;
        this.printer = printer;
    }

    deposit(amount, date) {
        this.transactionDB.addTransaction("deposit", amount, date);         // uses the addTransaction method from the transactionDB object
    }                                                                       // to either withdraw or deposit, depending on the type of transaction

    withdraw(amount, date) {
        this.transactionDB.addTransaction("withdraw", amount, date);
    }

    printStatement() {                                                                      // collates the information and prints to the console.
        const transactions = this.transactionDB.getTransactions();
        const formattedTransactions = this.transactionFormatter.format(transactions);
        this.printer.print(formattedTransactions);
    }

}

export default Banker;