const Person = require("./Person");

class Student extends Person {
    constructor (firstName, lastName, schoolName, grade) // Calvin, Carter, UT, 100
    {
        super(firstName, lastName);
        this.SchoolName = schoolName;
        this.Grade = grade;
        this.age = 0;
    }

    getNickName() {
        return "WizKid";
    }
}

const student1 = new Student("Calvin", "Carter", "UT", 100);
console.log(student1);
console.log(`Full name ${student1.getFullName()}`);
console.log(`Nickname: ${student1.getNickName()}`);