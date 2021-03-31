# Unit 09: Node.js and ES6+

## Overview
We now arrive at another important milestone in our journey. The JavaScript you wrote for your first project was executed entirely on the client side, though it used third-party server-side APIs. In this and later units, you will learn how to write your own server-side applications to handle requests and ultimately to build your own APIs.

In a previous era, this would be the point in our full-stack journey where we would begin learning a second programming language, such as PHP, to write server-side code. Luckily for us, Node.js—which was released in 2009—makes this unnecessary. Node.js is an implementation of the V8 JavaScript engine without Chrome, and allows us to write server-side code using JavaScript. We no longer need a browser to run JavaScript. We can (and will) do so from the command line.

In this unit, you will learn how to initialize a Node.js project, install third-party dependencies, and create interactive command-line applications. Node.js ships with what is referred to as a standard library. The standard library contains a number of modules that allow us to extend the functionality of Node.js, such as `fs`, which we will use to read and write files. There is also a large and robust ecosystem of third-party modules that you will learn how to add to applications to extend their functionality.

## Key Topics

* Node.js
    * process.argv
    * fs
* Modularization
    * require
    * module.exports
* npm
    * package.json
    * npm init
    * node_modules
* Inquirer
* ES6
    * let and const
    * Arrow functions
    * Template literals
    * Array methods (map, filter, reduce)
    * Spread and rest
    * Destructuring arrays and objects
* Asynchronous JavaScript
    * Callbacks
    * Promises
    * Async/await
    * Fetch API
    * Axios
 

## Comprehension Check
You will be employer-ready if you can answer the following questions:
1. What is npm?
2. What are three of the major changes introduced to JavaScript in ES6?
3. What are three approaches to handling asynchronous JavaScript?


## Learning Objectives
You will be employer-competitive if are able to: 
* Build interactive command-line applications that process user input.
* Explain modularization and how it relates to npm and the standard library.
* Initialize new Node.js projects with npm, and install and import dependencies.
* Explain the importance and usefulness of ES6+ concepts such as `let`, `const`, and arrow functions.
* Handle asynchronicity with callbacks, Promises, and async/await.
* Make server-side API calls with the Fetch API and Axios.


## Homework
Create a command-line application that dynamically generates a PDF resume from a GitHub username.


## Helpful Links
* [Wikipedia: Node.js](https://en.wikipedia.org/wiki/Node.js)
* [Wikipedia: V8](https://en.wikipedia.org/wiki/Chrome_V8)
* [Wikipedia: Server](https://en.wikipedia.org/wiki/Server_(computing))
* [fs Documentation](https://node.readthedocs.io/en/latest/api/fs/)
* [InquirerJS](https://www.npmjs.com/package/inquirer/v/0.2.3)

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
