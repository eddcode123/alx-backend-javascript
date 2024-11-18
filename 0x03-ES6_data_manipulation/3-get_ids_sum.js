export default function getStudentIdsSum(listOfStudents) {
  const ids = listOfStudents.map((student) => student.id);
  return ids.reduce((accum, element) => accum + element);
}
