export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index:string]: any;
  }
  
  export interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }
 
//student class
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}