import Subject = require('./Subject');
import Teacher = require('./Teacher');

declare module Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}

export = Subjects;
