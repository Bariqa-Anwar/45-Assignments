/*Q 62: Making a student Template: Create a blueprint for student information, including their name, age and the classes they're
taking and then fill in this blueprint with an example student.*/

interface Student {
    name: string;
    age: number;
    course: string[];
}

let Student: Student = {
    name: "Maaz",
    age: 29,
    course:[ "Science" , "English" , "IT"]
};

console.log(Student);