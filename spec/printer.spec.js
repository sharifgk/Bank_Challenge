import Printer from "../src/Printer.js"

xdescribe('Printer test', () => {
    let testPrinter;

    beforeEach(() => {
        testPrinter = new Printer();
    });

    describe('Printer functionality test', () => {
        it('Formats and outputs the transaction data', () => {

            spyOn(console, `log`);

            const transactions =
                [{ date: `01/01/2000`, credit: 1000, debit: ``, balance: 1000 },
                { date: `02/01/2000`, credit: ``, debit: 500, balance: 500 }];
            testPrinter.print(transactions);

            expect(console.log).toHaveBeenCalledWith(`date       || credit  || debit  || balance`);
            expect(console.log).toHaveBeenCalledWith(`01/01/2000 || 1000.00 ||        || 1000.00`);
            expect(console.log).toHaveBeenCalledWith(`02/01/2000 ||         || 500.00 ||  500.00`);



        })
    })




})