import React, { Component } from 'react';
class XiaoJieJieItem extends Component {
  state = {  }
  render() { 
    return (  
      <div onClick={this.handleClick.bind(this)}>
        {/* <li></li> */}
        {this.props.content}
      </div>
    );
  }
  handleClick() {
    // console.log('dasdass')
    this.props.deleteItem(this.props.index)
  }
}
 
export default XiaoJieJieItem;