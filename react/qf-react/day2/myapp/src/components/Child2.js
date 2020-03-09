import React, { Component } from 'react';
import Pubsub from 'pubsub-js'
class Child2 extends Component {
  constructor(props) {
    super(props)
    Pubsub.subscribe('evt',(msg,data) => {
      console.log(data)
    })
  }
  render() {
    return (
      <div>
        我是子组件2
      </div>
    );
  }
}

export default Child2;