const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const students = [];
      const fields = {};
      for (const line of lines) {
        const [firstname, , , field] = line.split(',');
        if (field && field.trim() !== 'field') {
          students.push(firstname);
          if (fields[field]) {
            fields[field].push(firstname);
          } else {
            fields[field] = [firstname];
          }
        }
      }
      console.log(`Number of students: ${students.length}`);
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
