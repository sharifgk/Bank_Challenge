# Installation

* Clone the repo to your local machine using `git clone https://github.com/sharifgk/bank-challenge.git`
* In the terminal `cd` into the project directory.
* Run `npm install` to install the dependencies.
* To check the tests use `npm test`.
* To check the output of the index file use `node index.js`.







# Domain Model

| Objects              | Properties           | Functions                                          | Outputs            |
|----------------------|----------------------|----------------------------------------------------|--------------------|
| Banker               | transactionDB        | deposit(amount,date)                               |                    | 
|                      | transactionFormatter | withdraw(amount,date)                              |                    | 
|                      | printer              | printStatement()                                   | @string            |  
|                      |                      |                                                    |                    |  
| TransactionDB        | transactions@array   | addTransaction(type@string,amount@int,date@string) |                    |  
|                      |                      | getTransactions()                                  | transactions@array | 
|                      |                      |                                                    |                    | 
| TransactionFormatter |                      | format(transactions@array)                         | @array             |   
|                      |                      | formatDate(date)                                   | date@string        | 
| Printer              |                      | print(formattedTransactions@array)                 | @void
