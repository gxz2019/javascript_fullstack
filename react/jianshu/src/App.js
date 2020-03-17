import React from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store/index'
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
