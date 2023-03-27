export default function getListStudentIds(studentsList) {
  const listIds = [];

  if (Array.isArray(studentsList)) {
    studentsList.map((student) => listIds.push(student.id));
  }
  return listIds;
}
