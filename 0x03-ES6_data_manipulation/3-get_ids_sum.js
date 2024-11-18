export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.map((student) => student.id).reduce((accum, element) => accum + element);
}
