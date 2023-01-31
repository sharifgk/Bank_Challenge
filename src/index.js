import Banker from "./Banker.js";
import TransactionDB from "./TransactionDB.js";
import TransactionFormatter from "./TransactionFormatter.js";
import Printer from "./Printer.js";

const account = new Banker(new TransactionDB(), new TransactionFormatter(), new Printer());

account.deposit(1000, `10-01-2012`);
account.deposit(2000, `13-01-2012`);
account.withdraw(500, `14-01-2012`);

account.printStatement();