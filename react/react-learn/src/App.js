import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num :1
    }
  }

  //componentWillMount()一般用的比较少，它更多的是在服务端渲染时使用。
  // 它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。
  componentWillMount() {
    console.log('componentWillMount')
  }

  // 组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
  componentDidMount() {
    console.log('componentDidMount')
  }

  //在此处完成组件的卸载和数据的销毁。
  componentWillUnmount (){
    console.log('componentWillUnmount ()')
  }
  handClick = () => {
    this.setState({
      num:++this.state.num
    })
  }
  render() { 
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.handClick}>click</button>
      </div>
      );
  }
}
 
export default App;