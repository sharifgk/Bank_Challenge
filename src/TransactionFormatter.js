class TransactionFormatter {

    format(transactions) {
        let balance = 0;
        return transactions.map(({ type, amount, date }) => {
            balance += type === "deposit" ? amount : -amount;
            return { date: this.formatDate(date), type, amount, balance };
        }).reverse();

    }

    formatDate(date) {
        const [day, month, year] = date.split(`-`);
        return `${day}/${month}/${year}`;
    }




}

export default TransactionFormatter;