// syntax and Example
console.log(`Example`);
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// odd number
console.log(`\nodd num`);
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// Sample list of students
console.log(`\nStudents and Grades`);
const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'C' },
    { name: 'David', grade: 'D' },
    { name: 'Eve', grade: 'A' }
];
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`Student: ${student.name}\n Grade: ${student.grade}`);
}
