class Printer {

    print(formattedTransactions) {
        console.log(`date       || credit  || debit || balance`);
        formattedTransactions.forEach(({ date, credit, debit, balance }) => {
            console.log(`${date} || ${Number(credit).toFixed(2).padStart(8)}|| ${Number(debit).toFixed(2).padStart(6)}|| ${Number(balance).toFixed(2)}`);

        });
    }

}

export default Printer;