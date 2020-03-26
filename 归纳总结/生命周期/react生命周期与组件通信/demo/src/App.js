import React, { Component } from 'react';
import Child from './Child'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num:1
    }
  }
  callback(msg) {
    this.setState({
      num:msg
    })
  }
  render() {
    return (
      <div>
        {this.state.num}
           <Child callback = {this.callback.bind(this)} /> 
      </div>
    );
  }
}

export default App;