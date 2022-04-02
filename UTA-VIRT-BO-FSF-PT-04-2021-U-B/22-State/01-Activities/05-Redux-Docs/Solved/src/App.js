import React from 'react';

import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <div className="m-5">
      <Provider store={store}>
        <h4>Here is the initialState:</h4>
        <div className="container">{JSON.stringify(store.getState())}</div>
      </Provider>
    </div>
  );
}

export default App;
