// Example student object
const student = {
    id: 1,
    firstName: 'Mohammad',
    lastName: 'Sharukh',
    age: 21,
    GPA: 9.4,
    grade: 'A',
    isEnrolled: true,

};

// Function to display student information
function displayStudentInfo(student) {
    for (let property in student) {
        if (student.hasOwnProperty(property)) {
            console.log(`${property}: ${student[property]}`);
        }
    }
}

// Call the function to display the student's information
displayStudentInfo(student);
