import React from 'react';
import { Provider } from 'react-redux';
import { HomePage } from './ui';
import ErrorBoundary from './shared/Error';
import { store } from './redux/store';

const WithStore = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <WithStore />
      </ErrorBoundary>
    </div>
  );
};

export default App;
