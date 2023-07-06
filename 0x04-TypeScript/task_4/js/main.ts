import { Subjects } from './subjects/Subject';

const { Cpp, Java, React } = Subjects;

export const cpp = Subjects.cpp;
export const java = Subjects.java;
export const react = Subjects.react;

export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('Cpp:');
const cppSubject = new Cpp();
cppSubject.setTeacher(cTeacher);
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

console.log('Java:');
const javaSubject = new Java();
javaSubject.setTeacher(cTeacher);
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

console.log('React:');
const reactSubject = new React();
reactSubject.setTeacher(cTeacher);
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
