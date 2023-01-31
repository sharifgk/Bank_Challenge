class TransactionFormatter {

    format(transactions) {
        return transactions.map(({ date, type, amount, balance }) =>
        ({
            date: this.formatDate(date),
            credit: type === `deposit` ? amount : ``,
            debit: type === `withdraw` ? amount : ``,
            balance: balance
        }));
    }

    formatDate(date) {
        const [day, month, year] = date.split(`-`);
        return `${day}/${month}/${year}`;
    }



}

export default TransactionFormatter;