import inquirer from 'inquirer'

const start = async () => {
  while (true) {
    const answer = await inquirer.prompt([{
      type: 'input',
      name: 'name'
    }, {
      type: 'list',
      name: 'goal',
      choices: [{ name: "Choice A", value: "a"}, "Choice B"]
    }])

    console.log(answer)
  }
}


start()
