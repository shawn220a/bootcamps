# Axios

In this activity you will utilize the axios library to make a request to the Github API and save a list of all of your repositories.

## Instructions

* Change directories into the `Unsolved` folder and run `npm install` from your terminal.

* Once the project dependencies finish installing, examine the starter code in `Unsolved/index.js`:

  * The provided starter code prompts the user for their GitHub username and then uses the answer to construct a URL that can be used to query the GitHub API.

* Use the `axios` module to send a GET request to the `queryUrl`. The response object returned from the request should contain a `data` property which should be an array of the user's GitHub repos.

* Loop through the array of repos and save only the names of the repos to an array.

* Join the array of repo names to a string separated with a newline character (`\n`).

* Save the string containing the repo names to a new `repos.txt` file. Once this completes print a message to the console indicating the number of repos saved.

* You'll be able to verify that you've successfully completed this activity if your code successfully saves a list of all of a given user's GitHub repos.

## 💡 Hints

* Take a look at the API response from the GitHub API to get an idea of how the data is structured. Example: <https://api.github.com/users/fabpot/repos?per_page=100>.

  * Avoid continually refreshing this page since there's a limit for non-authenticated requests to the GitHub API.

* Check out the [`fs.writeFile` documentation](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback). Keep in mind that the async version will utilize Promises rather than callbacks.

* Check out the [axios documentation](https://github.com/axios/axios) and look for examples for the `get` method.
