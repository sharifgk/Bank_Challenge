class Printer {

    print(formattedTransactions) {
        console.log(`date       || credit  || debit || balance`);
        formattedTransactions.forEach(({ date, type, amount, balance }) => {
            console.log(`${date} || ${type === "deposit" ? amount : "    "}    || ${type === "withdraw" ? amount : "   "}   || ${balance}`);

        });
    }

}

export default Printer;