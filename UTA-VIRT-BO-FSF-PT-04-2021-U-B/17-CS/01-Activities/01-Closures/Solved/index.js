const name = 'Kim';

function person() {
  const name = 'Lee';

  return function displayName() {
    console.log(name);
  };
}

let friend = person();
friend();

console.log(name);
