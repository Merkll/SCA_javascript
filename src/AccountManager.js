import Account from "./Account";

class AccountManager {
  constructor() {
    this.accounts = {};
  }

  create(accountNumber, initialDeposit = 0) {
    if (accountNumber in this.accounts) throw new Error("account number exist")

    this.accounts[accountNumber] = new Account(accountNumber, initialDeposit);

    return this.accounts[accountNumber];
  }

  accountExist(accountNumber) {
    try {
      return this.getAccount(accountNumber)
    } catch (error) {
    }
  }

  getAccount(accountNumber) {
    const account = this.accounts[accountNumber];

    if (!account) throw new Error("account does not exist");

    return account;
  }

  withdraw(accountNumber, amount) {
    return this.getAccount(accountNumber).withdraw(amount);
  }

  deposit(accountNumber, amount) {
    return this.getAccount(accountNumber).deposit(amount);
  }

  checkBalance(accountNumber) {
    return this.getAccount(accountNumber).balance;
  }

}

export default new AccountManager();