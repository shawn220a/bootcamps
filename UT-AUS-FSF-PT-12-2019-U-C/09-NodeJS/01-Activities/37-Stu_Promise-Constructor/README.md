# Promise Constructor

In this activity you will refactor a callback-based asynchronous function to utilize Promises.

## Instructions

* Open `Unsolved/index.js` and take a moment to examine the provided code.

* When the provided code is run, the `waitFor` function waits `2` (or however many seconds are provided) and then prints a message. If `seconds` is not a number or is a number less than 1, an error is thrown instead.

* Refactor the `waitFor` function to use Promises instead of callbacks.

* You should be able to call the refactored `waitFor` function like so:

```js
waitFor(2)
  .then(function(msg) {
    console.log(msg); // msg is printed since seconds is more than 0
  })
  .catch(function(err) {
    console.log(err);
  });

waitFor(-5)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.log(err); // error is printed since 'seconds' is less than 1
  });
```

## 💡 Hints

* Refer back to the previous demo for an example using the Promise constructor.

* Check out the [MDN Documentation on Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
