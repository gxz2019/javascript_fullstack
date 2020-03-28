import React from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store/index'
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Login from './pages/login/index'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        <Route path='/login' exact component={Login}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
