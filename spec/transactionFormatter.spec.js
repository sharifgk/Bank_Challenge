import TransactionFormatter from "../src/TransactionFormatter.js";

describe("TransactionFormatter tests", () => {
    let testTranForm;

    beforeEach(() => {
        testTranForm = new TransactionFormatter;
    });

    describe('format function', () => {
        it('should format transactions correctly', () => {
            const transactions = [{ date: `01-01-2000`, type: `deposit`, amount: 1000, balance: 1000 }];

            const expected = [{ date: `01/01/2000`, credit: 1000, debit: ``, balance: 1000 }];

            expect(testTranForm.format(transactions)).toEqual(expected);
        })
    })

    describe(`testing formatDate function`, () => {
        it('should correctly format date to acceptance criteria format', () => {
            expect(testTranForm.formatDate(`01-01-2000`)).toEqual(`01/01/2000`);
        })
    })


})