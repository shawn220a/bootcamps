const Character = require("../rpg-tdd")

test('creates a character object', () => {
  // create a new character with a name, strength, and hitpoints values
  const yogi = new Character("Dhalsim", 20, 65);

  // create a test that checks if the name is a string
  expect(yogi.name).toEqual(expect.any(String))

  // create a test that checks if the strength and hitpoints are numbers
  expect(yogi.strength).toEqual(expect.any(Number));
  expect(yogi.hitpoints).toEqual(expect.any(Number));

  // create a test that checks if the hitpoints is greater than the strength
  expect(yogi.hitpoints).toBeGreaterThan(yogi.strength)
  
});

// Bonus: write a test that will check if the character is alive or not
test('checks if character is alive or not', () => {
  const yogi = new Character("Dhalsim", 20, 65);

  expect(yogi.isAlive()).toBeTruthy();

  yogi.hitpoints = 0;

  expect(yogi.isAlive()).toBeFalsy();
});