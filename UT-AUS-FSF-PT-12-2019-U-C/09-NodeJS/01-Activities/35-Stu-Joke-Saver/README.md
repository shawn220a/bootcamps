# Joke Saver

In this activity you will write code to get a random joke from an API, append the joke to a file, and then read out all saved jokes from the file.

## Instructions

* Change directories into the `Unsolved` folder and run `npm install`.

* Once the installation completes, open `Unsolved/index.js` and examine the code.

  * A request is being made to the `icanhazdadjoke` API using axios.

  * This API requires some additional configuration be passed to axios in order to work.

* Run the `index.js` file to examine the response from the API. You should notice that an object containing a random joke is returned each time.

* Append the `joke` property of the response data to a file named `jokes.txt`.

* After appending the joke, read from the `jokes.txt` file and print its entire contents to the console.

* You can verify you've successfully completed this activity if every time the program is run a new joke is saved to the `jokes.txt` file and all the jokes are printed to the console.

## 💡Hints

* Check out the documentation for [fs.appendFile](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback). Keep in mind that the async version will utilize promises rather than callbacks.

* Check out the documentation for [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback). Keep in mind that the async version will utilize Promises rather than callbacks.

## 🏆Bonus

* Chain the calls to `axios.get`, `fs.appendFile`, and `fs.readFile` rather than nest them. See more about promise chaining from the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Chaining).
