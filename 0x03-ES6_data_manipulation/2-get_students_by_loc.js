export default function getStudentsByLocation(listOfStudents, City) {
  return listOfStudents.filter((student) => student.location === City);
}
