import * as React from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";
import "./App.css"; // Set the theme of the page to default to "light"

const ThemeContext = React.createContext("light");

const App = () => {
  // App component that provides initial context values
  // Here we are overwriting the context to be "green" using the Provider
  return (
    <ThemeContext.Provider value={"green"}>
      <Layout>
        <ThemeContext.Consumer>{theme => <Card theme={theme} />}</ThemeContext.Consumer>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;
