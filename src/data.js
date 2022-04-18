// Iteration 1: Student
// --------------------
// Modify the Student class by adding 2 properties and 1 method to it: updateName() by following the instructions below

// Class properties
// ----
// should receive 2 arguments (name & isAvailable)
// should receive the name property as its 1st argument
// should receive the isAvailable property as its 2nd argument

// updateName() method
// ----
// should be a function
// should receive the name property as its 1st argument
// should update the name of the student

// Iteration 2: Teacher
// --------------------
// Modify the Teacher class by adding 2 properties and 3 methods to it: addStudent() printStudents()and findStudent() by following the instructions below

// class properties
// ----
// should receive the name property as its 1st argument
// should create a students property and initialize it to [] (an empty array)

// addStudent() method
// ----
// should be a function
// should receive the student property as its 1st argument
// should add the student into the students array

// printStudents() method
// ----
// should be a function
// should receive 0 arguments
// should console.log each student's name from the students array

// findStudent() method
// ----
// should be a function
// should receive the name property as its 1st argument
// should return the name of the student if it's found and is available
// if the student is found but not available , the function should return "Student not available"
// if the student is not found , the function should return "Student not found"

class Student{
    constructor (nameParam, isAvailableParam) {
        this.name = nameParam;
        this.isAvailable = isAvailableParam;
    }

    updateName = (nameParam) => {
    return this.name = nameParam;
    }

}
  
class Teacher {
    constructor (nameParam) {
        this.students = [];
    }

    addStudent = (Student) => {
        this.students.push(Student);
        }

    printStudents = () => {
        this.students.forEach( (eachElement, indexElement) => {
            console.log(eachElement.name);
        })
        }

    findStudent = (nameParam) => {
        const estudiante = this.students.find(estudiante => estudiante.name === nameParam);
        if (!estudiante) {
            return "Student not found.";
        } else {
            if (estudiante.isAvailable === true) {
                return estudiante.name
            } else if (estudiante.isAvailable === false) {
                return "Student not available";
            }
        }
        
    }
}

// creating students
let student1 = new Student('Sandra', true);
let student2 = new Student('Gunner', false);
let student3 = new Student('Juan', false);

//creating a teacher
let teacher = new Teacher('Teresa');

// add students for the teacher
teacher.addStudent(student1);
teacher.addStudent(student2);
teacher.addStudent(student3);

// TEST 1
console.log("*** TEST 1. Should print 'Sandra', 'Gunner' and 'Juan' on new lines ***")
teacher.printStudents();

// TEST 2
console.log("*** TEST 2. Should print 'Sandra' ***")
let output = teacher.findStudent('Sandra');
console.log(output);

// TEST 3
console.log("*** TEST 3. Should print 'Student not available' ***")
let output1 = teacher.findStudent('Juan')
console.log(output1) 

// TEST 4
console.log("*** TEST 4. Should print 'Student not found'***")
let output2 = teacher.findStudent('Alex')
console.log(output2) 

