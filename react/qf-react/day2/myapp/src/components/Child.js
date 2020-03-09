import React, { Component } from 'react';
import Pubsub from 'pubsub-js'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ziText:'aaaa',
      name:'gxz'
    }
  }
  pubsub() {
    Pubsub.publish('evt',this.state.name)
  }
  render() {
    return (
      <div>
        我是子组件一
        {this.props.text}
        <button onClick={() => {this.props.Get(this.state.ziText)}}>child1向parent传值</button>
        <button onClick={()=> {this.pubsub()}}>child1向child2传值</button>
      </div>
    );
  }
}

export default Child;