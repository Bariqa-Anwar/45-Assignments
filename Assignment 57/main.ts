/*Q 57: Find the Average Grade: Given a list of grades, calculate the average grade.*/

let grades: number [] = [88, 95, 72, 69, 56];

let averageGrade = grades.reduce(( total, grade) => total + grade, 0) / grades.length;

console.log(averageGrade);
