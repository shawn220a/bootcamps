function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  };
}
