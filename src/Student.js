import Person from "./Person";

let lastId = 0;

class Student extends Person {
  constructor({ firstName, lastName, age }) {
    super({ firstName, lastName, age, id: lastId++ })
    this.courses = {}
  }

  registerCourse(courseName) {
    this.courses = {...this.courses, [courseName]: null }
  }

  scoreCourse(courseName, score) {
    if (!courseName in this.courses) throw new Error('Student dint register for course')

    this.courses = { ...this.courses, [courseName]: score }
  }

  printScore() {
    if (!Object.keys(this.courses).length) return console.log("No registered course")

    Object.entries(this.courses).forEach(([courseName, score]) => console.log(`${courseName}     ${score || 'No score available'}`))
  }
}

export default Student;
