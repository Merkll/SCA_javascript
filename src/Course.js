
class Course  {
  constructor(courseName, teacher) {
    this.teacher = teacher;
    this.courseName = courseName;
  }

  assignTeacher(teacher) {
    this.teacher = teacher
  }
}

export default Course;
