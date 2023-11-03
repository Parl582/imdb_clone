const students = [
  {
    id: 1,
    name: "Alice",
    grades: [92, 88, 75, 66, 30],
  },
  {
    id: 2,
    name: "Bob",
    grades: [87, 37, 29, 39, 27],
  },
  {
    id: 3,
    name: "Charlie",
    grades: [33, 39, 37, 92, 19],
  },
  {
    id: 4,
    name: "David",
    grades: [86, 89, 91, 59, 92],
  },
  {
    id: 5,
    name: "Eve",
    grades: [59, 83, 90, 75, 88],
  },
  {
    id: 6,
    name: "Frank",
    grades: [92, 88, 90, 78, 92],
  },
  {
    id: 7,
    name: "Grace",
    grades: [91, 59, 94, 82, 89],
  },
  {
    id: 8,
    name: "Hank",
    grades: [58, 80, 92, 77, 91],
  },
  {
    id: 9,
    name: "Ivy",
    grades: [88, 59, 82, 74, 92],
  },
  {
    id: 10,
    name: "Jack",
    grades: [90, 86, 93, 59, 88],
  },
];

//   // Expected output:
//   // [
//   //   { id: 4, name: 'David', average: 83.4 },
//   //   { id: 6, name: 'Frank', average: 88 },
//   //   { id: 7, name: 'Grace', average: 83 },
//   //   { id: 10, name: 'Jack', average: 83.2 }
//   // ]

// let data = [];

// for (i = 0; i < students.length; i++) {
//   console.log(students[i].grades);
//   data.push(students[i].grades);
// }

// console.log(...data);

// const data = students[0].grades.map((elm)=>   )

// console.log(data);

const filteredStudents = students
  .filter((student) => {
    const average =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length;
    return average >= 80;
  })
  .map((student) => ({
    id: student.id,
    name: student.name,
    average:
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length,
  }));

console.log(filteredStudents);

const data = students.filter((elm) => {
  const avg = elm.grades.reduce((a, c) => a + c, 0) / elm.grades.length;
  console.log(avg);
  return avg > 80;
});

// console.log(data);

const result = data.map((item) => ({
  name: item.name,
  id: item.id,
  avg: item.grades.reduce((a, c) => a + c, 0) / item.grades.length,
}));

console.log(result);

// filter student which grade is grater than 80%


// best apporch

const above8T = students.map((elm) => ({
  id: elm.id,
  name: elm.name,
  average: elm.grades.reduce((a, c) => a + c, 0) / elm.grades.length,
}));

const result1 = above8T.filter((elm) => elm.average > 80);

console.log(result1);
// console.log(result1);



