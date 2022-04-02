// Linear Approach (done in class)
const linear = num => {
  let arr = [1, 1];

  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[num - 1];
};

console.log(linear(10));

// Recursive Approach (for reference)
const recursive = num => {
  if (num <= 2) return 1;

  return recursive(num - 1) + recursive(num - 2);
};

// console.log(recursive(10));

module.exports = { recursive, linear };
