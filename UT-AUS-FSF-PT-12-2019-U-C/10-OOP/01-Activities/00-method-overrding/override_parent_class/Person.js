class Person {
    constructor (firstName, lastName) {
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    getFullName() {
        return this.FirstName + " " + this.LastName;
    }

    getNickName() {
        return "Uknown";
    }
}

module.exports = Person;