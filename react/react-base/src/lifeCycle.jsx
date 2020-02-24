import React, { Component } from 'react';

class LifeCycle extends Component{
  constructor(props) {
    super(props)
    console.log('1.构造函数')
    this.state = { msg : '来自属性传递' + props.prop}
  }
  render() {
    return <div>
      <p>react生命周期</p>
    </div>
  }
  componentWillMount() {
    //此时可以访问属性和状态，可以进行api调用，但是没办法做dom相关的操作
    console.log('2.组件将要挂载!')
  }
  componentDidMount() {
    //组件已经渲染完成，可以进行状态更新操作
    console.log('3.组件已经挂载')
  }
  componentWillReceiveProps() {
    //父组件传递的属性有变化，做出相应的操作
    console.log('4.组件属性更新了')
  }
  shouldComponentUpdate() {
    //组件是否需要更新,返回boolean值
    console.log('5.组件是否更新?')
    return true
  }
  componentWillUpdate() {
    console.log('6.组件将要更新')
  }
  componentDidUpdate() {
    console.log('7.组件已更新')
  }
}

export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      somePro : 'gxz'
    }
    setTimeout(() => {
      this.setState({
        somePro:'dsads'
      })
    }, 4000);
  }

  render() {
    return (
      <div>
        <LifeCycle prop={this.state.somePro} />
      </div>
    )
    }
  }