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
