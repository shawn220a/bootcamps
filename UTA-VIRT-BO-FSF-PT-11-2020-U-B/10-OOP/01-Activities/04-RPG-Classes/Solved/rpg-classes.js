// Convert the constructor function, including the prototype methods, to ES6 Classes.
class Character {
  constructor(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }

  printStats() {
    console.log(
      'Name: ' +
        this.name +
        '\nStrength: ' +
        this.strength +
        '\nHitPoints: ' +
        this.hitpoints
    );
    console.log('\n-------------\n');
  }

  isAlive() {
    if (this.hitpoints > 0) {
      console.log(this.name + ' is still alive!');
      console.log('\n-------------\n');
    } else {
      console.log(this.name + ' has died!');
    }
  }

  attack(opponent) {
    opponent.hitpoints -= this.strength;
    console.log(this.name + ' attacked ' + opponent.name + '!!');
    console.log('\n-------------\n');
  }
}

// =============================================================

// Create two new instances of a `Character`, giving them different names, strength, and hitPoints.
let yogi = new Character('Dhalsim', 20, 65);
let mutant = new Character('Blanka', 30, 50);

// Call a combination of `printStats()`, `attack()`, and `isAlive()` methods to have the two characters "fight" in your console.
yogi.printStats();
mutant.printStats();

mutant.attack(yogi);
yogi.printStats();
yogi.isAlive();

yogi.attack(mutant);
mutant.printStats();
mutant.isAlive();
