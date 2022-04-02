import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { StoreProvider } from './utils/GlobalState';

import Header from './components/Header';
import BookList from './pages/BookList';
import Detail from './pages/Detail';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <StoreProvider>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={BookList} />
                <Route exact path="/book/:bookId" component={Detail} />
                <Route render={() => <h1>404! Wrong Page</h1>} />
              </Switch>
            </div>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
