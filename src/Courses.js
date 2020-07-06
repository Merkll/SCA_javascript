import Course from "./Course";

class Courses  {
  constructor() {
    this.courses = {};
  }

  createCourse(courseName, teacher) {
    this.courses = {
      ...this.courses,
      [courseName]: new Course(courseName, teacher)
    }
  }

  getCourse(courseName) {
    return this.courses[courseName]
  }
}


export default Courses;
