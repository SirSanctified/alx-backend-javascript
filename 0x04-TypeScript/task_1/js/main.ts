interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    contract?: boolean
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.at(0)}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string; 
}

interface Student {
    firstName: string,
    lastName: string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;
    constructor(firstName:string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}