import React, { Component } from 'react';

class Phone extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        Phone
      </div>
    );
  }
}

export default Phone;