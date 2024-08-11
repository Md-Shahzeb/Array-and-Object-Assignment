// a) Use Object.preventExtensions method to prevent any further additions of properties to the student object.
let student = {
    name: 'Smith Doe',
    age: 21,
    grade: 'A'
};

Object.preventExtensions(student);

// b) Use Object.isExtensible method to check if the student object is extensible. Store the result in a variable called extensibleStatus.
let extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property set to 'Math'.
let teacher = {
    subject: 'Math'
};

// d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
Object.seal(teacher);

// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called sealedStatus.
let sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console.
console.log('Is the student object extensible?', extensibleStatus); // false
console.log('Is the teacher object sealed?', sealedStatus); // true
