class Account {

    balance = 0;

    deposit = (amount) => {
        this.balance += amount
    };
}

export default Account;