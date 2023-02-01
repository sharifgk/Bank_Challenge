import TransactionDB from "../src/TransactionDB.js";


describe('transactionDB Tests', () => {
    let testTranDB;

    beforeEach(() => {
        testTranDB = new TransactionDB();

    });

    describe('Initial transaction data storing tests', () => {

        it('store a deposit transaction in the DB array', () => {
            //Act
            testTranDB.addTransaction("deposit", 1000, `01-01-2000`);
            //Assert
            expect(testTranDB.getTransactions().length).toEqual(1);

        });

        it('Transaction details match the arguments passed', () => {
            testTranDB.addTransaction("deposit", 1000, `01-01-2000`);

            expect(testTranDB.getTransactions()[0]).toEqual({
                type: "deposit",
                amount: 1000,
                date: "01-01-2000",
            })
        })



    });
});