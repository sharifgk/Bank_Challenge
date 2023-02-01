import Printer from "../src/Printer.js"

describe('Printer test', () => {
    let testPrinter;
    let consoleSpy;

    beforeEach(() => {
        testPrinter = new Printer();
        consoleSpy = spyOn(console, `log`);
    });



    it('Top row is printed correctly', () => {

        testPrinter.print([]);
        expect(consoleSpy).toHaveBeenCalledWith(`date       || credit  || debit || balance`);

    });


    // it('should print transactions in the expected format', () => {

    //     testPrinter.print([
    //         { date: `01/01/2000`, type: `deposit`, amount: 1000, balance: 1000 },
    //         { date: `02/01/2000`, type: `withdraw`, amount: 500, balance: 500 }
    //     ]);

    //     expect(consoleSpy).toHaveBeenCalledWith(`01/01/2000 || 1000.00 ||       || 1000.00`);
    //     expect(consoleSpy).toHaveBeenCalledWith(`02/01/2000 ||         || 500.00||  500.00`);

    // })







});