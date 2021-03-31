import * as React from "react";
import "./App.css"; // Set the theme of the page to default to "light"
const ThemeContext = React.createContext("light");

console.log(ThemeContext);

function App() {
  // App component that provides initial context values
  // Here we are overwritting the context to be "dark" using the Provider
  return (
    <ThemeContext.Provider value={"dark"}>
      <Layout />
    </ThemeContext.Provider>
  );
}

// This component sits in between our Content and App components
// Thanks to the Context API, we do not need to pass any props through this component
function Layout() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Consuming Context</h1>
      <div style={{ margin: "0 auto" }}>
        <Card />
      </div>
    </div>
  );
}

// We access the value stored in context using Consumer
function Card() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          className="card"
          style={{
            backgroundColor: theme === "dark" ? "dimgray" : "white",
            textAlign: "center"
          }}
        >
          <div
            style={{
              color: theme === "dark" ? "white" : "black",
              textAlign: "center"
            }}
          >
            The theme is: {theme}
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
