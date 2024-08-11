// Initial array of students
let students = [
    { id: 1, firstName: 'Ashar', lastName: 'Hasan', age: 20, grade: 'A' },
    { id: 2, firstName: 'John', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Jimy', lastName: 'Beam', age: 19, grade: 'C' },
    { id: 4, firstName: 'Jack', lastName: 'dude', age: 21, grade: 'A' }
];

// a. Add a Student
function addStudent(id, firstName, lastName, age, grade) {
    const newStudent = { id, firstName, lastName, age, grade };
    students.push(newStudent);
    console.log(`Student ${firstName} ${lastName} added successfully.`);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
        console.log(`Student with ID ${id} updated successfully.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// c. Delete a Student
function deleteStudent(id) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        const deletedStudent = students.splice(studentIndex, 1);
        console.log(`Student ${deletedStudent[0].firstName} ${deletedStudent[0].lastName} deleted successfully.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// d. List All Students
function listAllStudents() {
    console.log("List of All Students:");
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    const studentsByGrade = students.filter(student => student.grade === grade);
    console.log(`Students with Grade ${grade}:`);
    studentsByGrade.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// f. Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average Age of Students: ${averageAge.toFixed(2)}`);
}

// Example usage:
addStudent(5, 'Samir', 'Ahmad', 25, 'B'); // Adding a new student
updateStudent(2, { lastName: 'Hasan', grade: 'A' }); // Updating student information
deleteStudent(3); // Deleting a student
listAllStudents(); // Listing all students
findStudentsByGrade('A'); // Finding students by grade
calculateAverageAge(); // Calculating average age
