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

const studentList: Student[] = [firstStudent, secondStudent];

