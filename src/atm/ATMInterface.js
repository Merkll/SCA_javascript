import inquirer from 'inquirer'
import accountManager from './AccountManager';

class ATMInterface {
  async createAccount(accountNumber) {
    const { initialDeposit } = await inquirer.prompt([
      {
        type: 'input',
        name: 'initialDeposit'
      }
    ])

    const account = accountManager.create(accountNumber, Number(initialDeposit))
    console.log(`Account create successfully. Account details are ${account.accountNumber} balance: ${account.balance}`)
  }

  checkBalance(accountNumber) {
    const balance = accountManager.checkBalance(accountNumber)

    console.log(`Yuur account balance is ${balance}`)
  }

  async withdraw(accountNumber) {
    const { amount } = await inquirer.prompt([
      {
        type: 'input',
        name: 'amount'
      }
    ])
    const balance = accountManager.withdraw(accountNumber, Number(amount))

    console.log(`Withdrawal successfull, and your balance is ${balance}`)
  }

  async deposit(accountNumber) {
    const { amount } = await inquirer.prompt([
      {
        type: 'input',
        name: 'amount'
      }
    ])
    const balance = accountManager.deposit(accountNumber, Number(amount))

    console.log(`Deposit successfull, and your balance is ${balance}`)
  }

  async displayActivityMenu(accountNumber) {
    const answer = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      choices: [
        { name: "Create", value: 'createAccount' },
        { name: "check balance", value: 'checkBalance'},
        { name: "Withdraw", value: 'withdraw'},
        { name: "deposit", value: 'deposit'},
        { name: "exit", value: null },
      ]
    }])

    const action = answer.action;

    if (action) return this[action](accountNumber)
  }

  async requestAccountNumber() {
    const answer = await inquirer.prompt([{
      type: 'input',
      name: 'accountNumber'
    }])

    return answer.accountNumber
  }

  async startMenu() {
    while (true) {
      const accountNumber = await this.requestAccountNumber()

      if (accountManager.accountExist(accountNumber)) await this.displayActivityMenu(accountNumber)
      else await this.createAccount(accountNumber) 
    }
  }
}

export default new ATMInterface()
