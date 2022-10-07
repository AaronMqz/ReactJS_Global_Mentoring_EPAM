import React, { ErrorInfo, ReactNode } from 'react';
import Error from './Error.styled';

type ErrorProps = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<ErrorProps, State> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
    });
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error.Container>
          <Error.Text>Ups... Something went wrong.</Error.Text>
          <Error.ErrorImage />
        </Error.Container>
      );
    }
    return this.props.children;
  }
}
