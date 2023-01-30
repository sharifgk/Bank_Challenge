# Domain Model

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Account | transactions@array        |deposit(amount:int, date:string)|         |
|         | balance@int               |withdraw(amount:int, date:string)|         |
|         |                           |printStatement()   |         |
|Transaction|date@string              |                   |         |
|         |amount@int                 |                   |         |
|         |balance@int                |                   |         |
|Statement| | printer(transactions@array)