const fs = require('fs');


const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) reject(new Error('Cannot load the database'));

    if (data) {
      const fd = data.toString('utf-8').trim().split('\n');
      const subjects = {};
      const fieldNames = fd[0].split(',');
      const propNames = fieldNames.slice(0, fieldNames.length - 1);

      for (const line of fd.slice(1)) {
        const students = line.split(',');
        const propValues = students.slice(0, students.length - 1);
        const field = students[students.length - 1];
        if (!Object.keys(subjects).includes(field)) subjects[field] = [];

        const studentEntries = propNames
          .map((propName, idx) => [propName, propValues[idx]]);
        subjects[field].push(Object.fromEntries(studentEntries));
      }

      const numStudents = Object
        .values(subjects)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${numStudents}`);
      for (const [field, group] of Object.entries(subjects)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
