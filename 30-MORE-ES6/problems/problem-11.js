// Create a `BankAccount` class with properties `accountNumber` and `balance`. Add methods to:
// - `deposit(amount)` - add money to the balance
// - `withdraw(amount)` - subtract money from the balance (don't allow overdraft - if withdrawal amount is greater than balance, don't process it)
// - `checkBalance()` - return the current balance

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
      return this.balance = amount + this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return null;
    }

    return this.balance = this.balance - amount;
    }
    
    checkBalance() {
        return this.balance;
    }
}

const details = new BankAccount(12345, 25000);
console.log(details.deposit(2000));
console.log(details.withdraw(2500));
console.log(details.checkBalance());