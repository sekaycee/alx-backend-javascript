// eslint-disable-next-line max-len
const getStudentsByLocation = (students, city) => students.filter((student) => student.location === city);

export default getStudentsByLocation;
