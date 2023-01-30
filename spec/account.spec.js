import Account from "../src/Account.js";


describe('Account Tests', () => {

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
    });
});