import React, { Component } from 'react';

import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './redux/index'


class Reduce extends Component {
  constructor(props) {
    super(props)
    // console.log(store.getState())
    this.state = store.getState()
    store.subscribe(this.storeChange)
  }
  storeChange = () => {
    this.setState(store.getState())
  }
  changeValue=(e) => {
    const action = {
      type:'changeInput',
      value:e.target.value
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div>
        <div>
        <Input onChange={this.changeValue} placeholder={this.state.inputValue} style={{width:'250px',margin:'10px'}} />
        <Button type="primary" style={{margin:'10px'}}>增加</Button>
        </div>
        <div style={{margin:'10px',width:'250px'}}>
    <List bordered dataSource={this.state.list} renderItem={item => (<List.Item>{item}</List.Item>)} />
        </div>
      </div>
    );
  }
}

export default Reduce;


//redux   类似vue的vuex   
// javascript提供一个可预测性(我们给一个固定的输入，那么必定可以等到一个结果)的状态管理容器
//集中的管理react中多个组件的状态
//redux是一个专门的状态管理库   并不是只能再react中使用

//需求场景
//某个组件的状态需要共享的时候
//一个组件需要改变另一个组件的状态的时候
//组件中的状态需要在任何时候拿到

//三大原则
//1.单一数据源 整个react中的状态会被统一的管理到store
//2.state是只读的 我们不能直接改变state 而是要通过触发redux中特定的方法来进行修改
//3.使用纯函数来进行修改操作 ：action来改变redux中的state