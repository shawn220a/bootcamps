# Context with Components

* In this activity students will work with partners to create a theme switcher using the Context API. Notice that this time, the components will be separated into their own files.

## Instructions

* Replace your React application's src folder with [Unsolved/src](Unsolved/src).

* Start the application in dev mode by running `npm start` in your terminal.

* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

* Update this application to include the following:

  * A Context object should contain the theme for the card.

  * Separate the Card and Layout components into their own files in a folder named `components`.

  * The color of the card should be obtained from the Context API.

  * Instead of passing the prop `dark`, provide a prop named `green` that will turn the card the following color: `#5cb85c`.

### Hints

* The Context object that you will create will need to be the same for both the Provider and the Consumer. How can you ensure that it's the same object without using state?
 
