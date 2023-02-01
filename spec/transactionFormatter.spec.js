import TransactionFormatter from "../src/TransactionFormatter.js";

describe("TransactionFormatter tests", () => {
    let testTranForm;

    beforeEach(() => {
        testTranForm = new TransactionFormatter;
    });

    describe('format', () => {
        it('should format the transactions correctly', () => {
            const transactions = [{ type: 'deposit', amount: 1000, date: '01-01-2000' }, { type: 'withdraw', amount: 500, date: '02-01-2000' },];
            const expectedResult = [{ date: '01/01/2000', type: 'deposit', amount: 1000, balance: 1000 }, { date: '02/01/2000', type: 'withdraw', amount: 500, balance: 500 },];
            expect(testTranForm.format(transactions)).toEqual(expectedResult);
        });
    });

    describe('formatDate', () => {
        it('should format the date correctly', () => {
            const date = '01-01-2022';
            const expectedResult = '01/01/2022';
            expect(testTranForm.formatDate(date)).toEqual(expectedResult);
        });
    });


})