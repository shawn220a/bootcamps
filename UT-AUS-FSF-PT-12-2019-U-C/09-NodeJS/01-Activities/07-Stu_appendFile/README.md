# appendFile

In this activity, you will create a "commit logger" that records commit messages (for poetic purposes) using `fs`.

## Instructions

* In your working directory, create a Node application, `index.js`, that accepts a command line argument, and, each time it is run, will write the argument to file _without_ overwriting the existing text.

* You may need to consult the Node.js `fs` documentation for the appropriate method and its usage.

## Hint(s)

* If `fs.readFile` reads a file and `fs.writeFile` writes, but _overwrites_, a file, what method do you think will allow you to _append_ text to a file?

## Bonus

* How would you add arguments on new lines? 
