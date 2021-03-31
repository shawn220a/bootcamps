function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = function() {
    return this.balance;
  },
  this.setBalance = function(value) {
    this.balance = value;
  },
  this.updateStatement = function(value) {
    this.statement.push(value);
  },
  this.getStatement = function () {
    // Calling Array#slice(0) returns a copy of the array.
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    return this.statement.slice(0);
  },
  this.printStatement = function() {
    var statement = this.getStatement();
    for (var i = 0; i < statement.length; i++) {
      console.log(`${i + 1}. ${statement[i]}`);
    }
  },
  this.deposit = function(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number!");
    }
    var newBalance = this.getBalance() + value;
    this.setBalance(newBalance);
    this.updateStatement(newBalance);
    console.log(`Deposited ${value}!`);
  },
  this.withdraw = function(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number");
    }
    var newBalance = this.getBalance() - value;
    if (newBalance < 0) {
      throw new Error("Insufficient funds for this transaction");
    }
    this.setBalance(newBalance);
    this.updateStatement(-value);
    console.log(`Withdrew ${value}!`);
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  };
}


var bank = new MiniBank(0);
bank.printBalance();

bank.deposit(85);
bank.printBalance();

bank.withdraw(20);
bank.printBalance();

bank.printStatement();
