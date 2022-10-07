import React from 'react';
import { HomePage } from './ui';
import ErrorBoundary from './shared/Error';

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </div>
  );
};

export default App;
