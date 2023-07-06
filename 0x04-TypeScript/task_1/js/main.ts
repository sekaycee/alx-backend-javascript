// Define student interface
export interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const firstStudent: Student = {
	firstName: "Kelechi",
	lastName: "Egbuta",
	age: 31,
	location: "Abuja, Nigeria",
};

const secondStudent: Student = {
	firstName: "Kay",
	lastName: "Cee",
	age: 29,
	location: "London, UK",
};

const studentsList: Student[] = [firstStudent, secondStudent];

// Render a table and append a new row for each student in the array
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

// Define the interface named Teacher
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Define the interface named Directors that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create an instance of Directors
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
}

// Define the interface named printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Example usage of printTeacher function
const teacherName = printTeacher("John", "Doe");
console.log(teacherName);

// Define the interface for the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define the interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass
class StudentClass implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create an instance of StudentClass
const student = new StudentClass("John", "Doe");

console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
