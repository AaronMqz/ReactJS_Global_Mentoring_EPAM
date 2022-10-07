import React from "react";
import { HomePage } from "./ui";
import ErrorBoundary from "./shared/Error";

export default () => {
  return (
    <div>
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </div>
  );
};
