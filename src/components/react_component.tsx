import React from 'react';

export class Results extends React.Component<{ filter: string[] }, unknown> {
  render() {
    return (
      <ul>
        {this.props.filter.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
