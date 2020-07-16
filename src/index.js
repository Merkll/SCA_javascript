const arr1 = [1,2,3,4,5];

function delay(time = 5000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(0);
    } , time)
  })
}

function checkBalance(accountNumber, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking....")
      if (accountNumber === 0) return resolve(1000,amount);

      resolve(0);
    } , 5000)
  })
}

async function checkBalanceasync(accountNumber) {
  await delay(Math.random() * 10000);

  return accountNumber === 0 ? 1000 : 0
}


function withdraw(amount, balance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("withdrawing....")
      if (amount < balance) return resolve(true);

      reject("Not enough balance");
    } , 3000)
  })
}

async function withdrawsync(balance, amount) {
  await delay(Math.random() * 10000)

  if (amount > balance) throw new Error("insuffienct")
  return amount < balance
}

function dispenceCash(amount, canDispence) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("dispensing....")
      if(canDispence) return resolve(amount);

      reject("Error")
    } , 6000)
  })
}

async function dispenceCashsync(canDispence, amount) {
  await delay(Math.random() * 10000);

  return amount
}


function customerAction(identifier) {
  return new Promise((resolve, reject) => {
    console.log("executing for => ", identifier)
    checkBalance(0)
    .then((balance) => withdraw(balance, 300))
    .then((dispence) => dispenceCash(dispence, 300))
    .then(() => console.log("done executing for => ", identifier))
    .then(resolve)
    .catch((err) => console.log("ATM error =>", err))
  })

}

async function customerActionsync(identifier) {
  try {
    console.log("Excuting =>", identifier)
    const balance = await checkBalanceasync(0);
    console.log("Checked balance =>", identifier, balance)
    const shouldDispence = await withdrawsync(balance, 300)
    console.log("withdraw =>", identifier)
    await dispenceCashsync(shouldDispence, 300)
    console.log("dispensed =>", identifier)
  } catch (error) {
    console.log(error)
  }
}

customerAction("first")
customerAction("second")
customerAction("third")


checkBalance(0)
.then((balance) => withdraw(balance, 300))
.then((dispence) => dispenceCash(dispence, 300))
.catch((err) => console.log("ATM error =>", err))

checkBalance(0)
  .then((balance) => {
    withdraw(balance, 300)
    .then((dispence) => {
      dispenceCash(dispence, 300)
    })
  })

checkBalance(0)
  .then(withdraw.bind(null, 300))
  .then(dispenceCash.bind(null, 300))
  .catch((err) => console.log("ATM error =>", err))


async function notify() {
  const data = await Promise.all([customerActionsync("first"), customerActionsync("second"), customerActionsync("third")])
  console.log("Notifing admin")

}

notify()
