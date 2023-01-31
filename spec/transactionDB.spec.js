import TransactionDB from "../src/TransactionDB.js";


describe('transactionDB Tests', () => {
    let testTranDB;

    beforeEach(() => {
        testTranDB = new TransactionDB();

    });

    describe('Initial transaction data storing tests', () => {

        it('store a deposit transaction in the DB array', () => {
            //Act
            testTranDB.addTransaction("01/01/2000", "deposit", 1000, 1000)
            //Assert
            expect(testTranDB.getTransactions().length).toEqual(1);

        });

        it('Transaction details match the arguments passed', () => {
            testTranDB.addTransaction("01/01/2000", "deposit", 1000, 1000);

            expect(testTranDB.getTransactions()[0]).toEqual({
                date: "01/01/2000",
                type: "deposit",
                amount: 1000,
                balance: 1000,
            })
        })



    });
});