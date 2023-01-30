import Account from "../src/Account.js";


describe('Account Tests', () => {
    let testAccount;
    let result;

    beforeEach(() => {
        testAccount = new Account();
        result = undefined;

    });

    describe('Initial balance tests', () => {

        it('should update the balance to 100 when depositing 100 into a new account', () => {
            //Arrange
            const testAccount = new Account();
            testAccount.deposit(100, '01/01/2000');
            //Act
            const result = testAccount.balance;
            //Assert
            expect(result).toBe(100);
        });
        it('should update balance to 0 when withdrawing 100', () => {

            testAccount.balance = 100;

            testAccount.withdraw(100, '01/01/2000');
            result = testAccount.balance;

            expect(result).toBe(0);
        });
        it('depositing should create a new transaction', () => { })


    });
});