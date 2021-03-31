/*
    By default every object you create has a toString() method
    you can override this method by adding toString() method to your class.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
*/

class Dog {
    constructor (name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

const dog1 = new Dog('Flash');
const dog2 = new Dog('Blaze');

console.log(String(dog1)); // String function takes in an arguement. Here we are passing in an object. Since we overridden the toString method the
                           // it will print out the name property from the object.

console.log([dog1, dog2].join(" ")); // As the join method prints out the object, we are overriding the toString method to print out the object name