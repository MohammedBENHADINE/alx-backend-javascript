const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

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
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = countStudents;
