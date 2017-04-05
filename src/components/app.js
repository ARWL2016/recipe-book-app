import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <body className="container">
        {this.props.children}
      </body>
    );
  }
}
