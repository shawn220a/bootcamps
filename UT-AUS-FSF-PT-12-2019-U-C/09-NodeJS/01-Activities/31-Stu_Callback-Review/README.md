# Callback Review

In this activity you will write code to read a file containing a list of dogs and cats, and write two new files to separate dog and cat entries.

## Instructions

* Open the `Unsolved/index.js` file and take a moment to examine the provided code:

  * The `fs.readFile` method is being used to read the `animals.json` file.

  * Since the JSON data retrieved using `fs.readFile` is a string, we're calling `JSON.parse` to parse the string to a JSON object.

  * We're allocating two empty arrays called `dogs` and `cats`.

* After understanding the provided code, write code to loop through `animalJSON` and for each animal object, check its `species` property. If an animal is a `dog`, push it to the `dogs` array, else push it to the `cats` array.

* After looping through every animal, convert both the `dogs` and `cats` arrays to JSON strings using `JSON.stringify`. Save the stringified versions of the arrays to new variables.

* Then, save the JSON string version of the `dogs` array to a new `dogs.json` file. Print a message after this completes indicating that it was successful.

* Then, save the JSON string version of the `cats` array to a new `cats.json` file. Print a message after this completes indicating that it was successful.

* You can verify that you've successfully completed this activity if after running your code you have a `dogs.json` file containing only dogs and a `cats.json` object containing only cats.

## 💡Hints

* Check out the [`fs.writeFile` documentation](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback). Keep in mind that the async version will utilize promises rather than callbacks.

* Check out the [`JSON.parse` documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

* Check out the [`JSON.stringify` documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
