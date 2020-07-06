class Account {
  constructor(accountNumber, initialDeposit) {
    this.accountNumber = accountNumber;
    this.balance = initialDeposit
  }

  get accountBalance() {
    return this.balance
  }

  withdraw(amount) {
    if (amount > this.balance) throw new Error("Insufficeint funds")

    this.balance -= amount

    return this.balance
  }

  deposit(amount) {
    this.balance += amount

    return this.balance
  }
}

export default Account
