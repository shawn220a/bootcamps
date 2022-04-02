// =============================================================
// 1. Object
const arya = {
  first: 'Arya',
  last: 'Stark',
  origin: 'Winterfell'
};

// Destructure the object 'arya' so the following console.log will print successfully
const { first, last, origin } = arya;

console.log(first); // <= Arya
console.log(origin); // <= Winterfell

// =============================================================
// 2. Nested Object
const john = {
  first: 'John',
  last: 'Snow',
  title: 'Prince',
  family: {
    brothers: {
      brother1: 'Rob Stark',
      brother2: 'Rickon Stark'
    },
    sisters: {
      sister1: 'Arya Stark',
      sister2: 'Sansa Stark'
    }
  }
};

// Destructure the object 'john' so the following console.log will print successfully
const { brother1, brother2 } = john.family.brothers;

console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark

// =============================================================
// 3. Arrays
const characters = ['Ned Stark', 'The Quiet Wolf', 'House Stark'];

// Destructure the array 'characters' so the following console.log will print successfully
const [name, alias, allegiance] = characters;

console.log(name, alias, allegiance); // <= Ned Stark The Quiet Wolf House Stark

// =============================================================
// 4. Strings
const skills = 'male, Baratheon, Cersei';

// Destructure the string 'skills' so the following console.log will print successfully
// Hint: set variables and split
const [gender, family, spouse] = skills.split(',');

console.log(gender, family, spouse); // <= male Baratheon Cersei
