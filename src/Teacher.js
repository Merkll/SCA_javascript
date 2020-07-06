import Person from "./Person";

let lastId = 0

class Teacher extends Person {
  constructor({ firstName, lastName, age }) {
    super({ firstName, lastName, age, id: lastId++ })
    this.courses = [];
  }

  assignCourse(courseName) {
    this.courses = [...this.courses, courseName]
  }

  gradeScore(student, course, score) {
    if (!this.courses.includes(course)) throw new Error("Course not assigned")

    return student.scoreCourse(course, score)
  }
}

export default Teacher;
