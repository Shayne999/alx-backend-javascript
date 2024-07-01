import getListStudents from './0-get_list_students.js'

export default function getStudentIdsSum(students) {
    return students.reduce((acc, student) => acc + student.id, 0);
}