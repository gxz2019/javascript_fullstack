import React, { Component } from 'react';
import TodoLsitUi from './TodoListUi'
import store from './store/store'
import {getValue,getData} from './store/actionCreator'

class TodoLsit extends Component {
  constructor(props) {
    super(props)
    this.state=store.getState()
  }
  componentDidMount() {
    const action = {
      type:'getData',
      data:getData()
    }
    store.dispatch(action)
  }
  getValue = (e) =>{
    const action = getValue(e.target.value)
    store.dispatch(action)
  }
  render() {
    return (
      <div>
        <TodoLsitUi getValue={this.getValue} data={this.state.data} />
      </div>
    );
  }
}

export default TodoLsit;