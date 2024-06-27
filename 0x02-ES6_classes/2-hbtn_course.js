export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    // name getters and setters
    get name() {
        return this._name;
    }
    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = name;
    }


    // length getters and setters
    get length() {
        return this._length;
    }
    set length(length) {
        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = length;
    }


    // students getters and setters
    get students() {
        return this._students;
    }
    set students(students) {
        if (!(students instanceof Array)) {
            throw new TypeError('Students must be an array of strings');
        }
        if (!students.every((student) => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = students;
    }
    
}