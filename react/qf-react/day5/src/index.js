import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'

import { Provider } from 'react-redux'  //提供器
import store from './store/index'
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render(App,document.querySelector('#root'))