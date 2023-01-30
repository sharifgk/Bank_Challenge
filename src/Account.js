class Account {

    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit = (amount) => {
        this.balance += amount
    };

    withdraw = (amount) => {
        this.balance -= amount
    }
}

export default Account;