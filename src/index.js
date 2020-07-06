 import faker from 'faker'
import Student from './Student'
import Teacher from './Teacher'
import Course from './Course'
import Courses from './Courses'
//  import { prompt } from 'inquirer'

const courseManager = new Courses()

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

courseManager.createCourse('math')
courseManager.createCourse('english')

const CoursesEnum = Object.freeze({
  physis: 'physics',
  math: 'maths'
})

courseManager.createCourse(CoursesEnum.math)
courseManager.createCourse(CoursesEnum.physis)


// student registration
const student1 = new Student(students[0])

student1.printScore()
student1.registerCourse(Courses.math)
student1.registerCourse(Courses.physis)
student1.printScore()

const mathTeacher = new Teacher(teachers[0])
mathTeacher.assignCourse(Courses.math)
mathTeacher.assignCourse(Courses.physis)
mathTeacher.gradeScore(student1, Courses.math, 50);
mathTeacher.gradeScore(student1, Courses.physis, 70);

student1.printScore()
