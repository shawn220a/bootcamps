import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <StoreProvider>
          <Switch>
            <Route exact path={["/", "/books"]}>
              <Books />
            </Route>
            <Route exact path="/books/:id">
              <Detail />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
