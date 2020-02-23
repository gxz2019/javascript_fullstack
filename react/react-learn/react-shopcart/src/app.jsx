import React, { Component } from 'react';

//函数型组件传递
function Welcome(props) {
  return <div>hello, {props.name}</div>
}

class App extends Component {
  constructor(props) {
    super(props)
    //初始状态
    this.state = {
      count: 0,
      date: new Date()
    }
  }
  componentDidMount() {
    var time = setInterval(() => {
      this.setState({
        date:new Date(),
        count:++this.state.count
      })
    },1000)
  }
  formatName = (user) => user.firstName + '  '+ user.lastName
  render() {
    const name = 'GXZ';
    const jsx = <p>hello ,同学们</p>
    return (<div>
      app组件
    <h1>{name}</h1>
      <p>{  this.formatName({ firstName: 'tom' , lastName: 'jerry' })}</p>
      {jsx}
      <Welcome name="tom" />
    <p>{this.state.date.toLocaleTimeString()}</p>
    </div>
    );
  }
}

export default App;

