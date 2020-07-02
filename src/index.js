 import faker from 'faker'
import Student from './Student'
//  import { prompt } from 'inquirer'


 const students = [
   {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.random.number(20)
  },
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.random.number(20)
  },
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.random.number(20)
  },
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.random.number(20)
  }
]

const teachers = [
  {
   firstName: faker.name.firstName(),
   lastName: faker.name.lastName(),
   age: faker.random.number(20)
 },
 {
   firstName: faker.name.firstName(),
   lastName: faker.name.lastName(),
   age: faker.random.number(20)
 },
 {
   firstName: faker.name.firstName(),
   lastName: faker.name.lastName(),
   age: faker.random.number(20)
 },
 {
   firstName: faker.name.firstName(),
   lastName: faker.name.lastName(),
   age: faker.random.number(20)
 }
]


// student registration
const student1 = new Student(students[0])




console.log(student1.printScore());
student1.registerCourse('Math')
console.log(student1.printScore());