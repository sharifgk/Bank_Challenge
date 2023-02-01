class TransactionFormatter {

    format(transactions) {
        let balance = 0; //Keep track of balance
        return transactions.map(({ type, amount, date }) => {                   //this method maps through the transactions, + or - to the balance depending on the
            balance += type === "deposit" ? amount : -amount;                   //type of transaction. It then returns an array of correctly formatted transactions.
            return { date: this.formatDate(date), type, amount, balance };
        }).reverse();

    }

    formatDate(date) {
        const [day, month, year] = date.split(`-`);         //makes sure the string entered for the date will match the acceptance criteria date format.
        return `${day}/${month}/${year}`;
    }




}

export default TransactionFormatter;