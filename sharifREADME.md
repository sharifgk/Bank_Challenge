













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
