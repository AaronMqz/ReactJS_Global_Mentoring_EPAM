import React from 'react';

export class Results extends React.Component {
  render() {
    return (
      <ul>
        {this.props.filter.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    )

  }
}

