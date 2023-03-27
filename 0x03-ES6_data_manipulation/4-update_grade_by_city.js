export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const studentsByCity = studentsList.filter((student) => student.location === city);
  return studentsByCity.map((student) => {
    const grade = newGrades.find((studentGrade) => studentGrade.studentId === student.id);
    if (grade) {
      return { ...student, grade: grade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
