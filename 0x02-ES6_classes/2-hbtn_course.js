export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof (length) !== 'number') {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((students) => typeof students === 'string')) {
      throw new Error('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // create getters for each attribute
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // create setters for each attribute
  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName;
  }

  set length(newlength) {
    if (typeof (newlength) !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = newlength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((students) => typeof students === 'string')) {
      throw new Error('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
