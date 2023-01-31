class TransactionFormatter {

    format(transactions) {
        let balance = 0;
        return transactions.map(({ type, amount, date }) => {
            balance += type === "deposit" ? amount : -amount;
            return { date, type, amount, balance };
        });

    }




}

export default TransactionFormatter;