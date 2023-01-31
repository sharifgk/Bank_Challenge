class Printer {

    print(formattedTransactions) {
        console.log(`date       || credit  || debit || balance`);
        formattedTransactions.forEach(({ date, type, amount, balance }) => {
            console.log(`${date} || ${type === "deposit" ? amount.toFixed(2) : "       "} || ${type === "withdraw" ? amount.toFixed(2) : "      "}|| ${balance.toFixed(2)}`);

        });
    }

}

export default Printer;