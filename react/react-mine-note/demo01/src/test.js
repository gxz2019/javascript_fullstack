import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Test extends Component {  
  render() { 
    return (
  <li onClick={this.handleClick.bind(this)}>{this.props.avname}-为你服务-{this.props.content}</li>
    );
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}
Test.prototypes = {
  avname:PropTypes.string.isRequired,
  content:PropTypes.string,
  index:PropTypes.number,
  deleteItem:PropTypes.func
}
 
export default Test;