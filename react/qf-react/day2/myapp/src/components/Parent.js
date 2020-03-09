import React, { Component } from 'react';
import Child from './Child'
import Child2 from './Child2'

class Parent extends Component {
 constructor(props) {
   super(props)
   this.state={}
 }
 func = (text) => {
   console.log(text)
 }
  render() {
    return (
      <div>
        Parent
        <Child text="woshisdish" Get = {this.func} />
        <Child2 />
      </div>
    );
  }
}

export default Parent;