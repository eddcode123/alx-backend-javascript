export default function updateStudentGradeByCity(listOfStudents, City, newGrades) {
  return listOfStudents.filter((student) => student.location === City)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
