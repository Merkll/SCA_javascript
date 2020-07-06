class BaseClass {
    changeName(newName) {
      this.name = newName
    }
}

class ClassName extends BaseClass {
  constructor(name) {
    super()
    this.name = name
  }

  getName() {
    return this.name
  }
}

const obj = new ClassName('Anisat')
console.log(obj.getName())
obj.changeName('Blossom')
console.log(obj.getName())

