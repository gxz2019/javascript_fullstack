import React, { Component } from 'react';

class Test extends Component {  
  render() { 
    return (
    <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
    );
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}
 
export default Test;