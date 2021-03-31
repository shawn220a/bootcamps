# Mini Project

In this activity you will build a command line tool that generates and HTML portfolio page from user input.

## Instructions

* Your application should prompt the user for information such as their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

* Using the data collected from the prompts, an HTML document should be constructed containing this information and written to the filesystem. Be sure to add some CSS styling to the document.

* Some tools and technologies you'll need to accomplish this:

  * FS: For writing to the filesystem
  * Inquirer: For collecting user input
  * String template literals: For generating a string version of the HTML document before it is written to the filesystem
  * Promises: For handling asynchronous behavior

## Hint(s)

* It may be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy/paste its contents into a string template literal and write a function to insert the user input into the appropriate places in the HTML string before writing it to the filesystem.
