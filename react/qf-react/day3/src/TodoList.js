import React, { Component } from 'react';
import TodoListui from './TodoListui'
import store from './store/index'
import {getValueAction,addItemAction,deleteItemAction,getTodoLsit} from './store/actionCreator.js'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.valueChange)
  }
  deleteItem = (i) => {
    const action = deleteItemAction(i)
    store.dispatch(action)
  }
  clickBtn = () => {
    const action = addItemAction()
    store.dispatch(action)
  }
  valueChange = () => {
    this.setState(store.getState())
  }
  getValue = (e) => {
    const action = getValueAction(e.target.value)
    store.dispatch(action)
  }
  componentDidMount() {
    // const action = getTodoLsit()
    // store.dispatch(action)
  }
  render() {
    return (
      <TodoListui 
      getValue={this.getValue}
      inputValue={this.state.inputValue}
      clickBtn={this.clickBtn}
      data={this.state.data}
      deleteItem={this.deleteItem}
      />
    )
  }
}

export default TodoList;