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

  gradeScore() {
    // TODO: implement functionality to grade score
  }
}

export default Teacher;
