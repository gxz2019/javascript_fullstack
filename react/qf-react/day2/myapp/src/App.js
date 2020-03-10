import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {Route,NavLink,withRouter} from 'react-router-dom' 
import Phone from './components/Phone';

function App(props) {
  //withRouter就是react的一个高阶组件（HOC）
  // withRouter 就是让不是路由切换的组件也具有路由切换组件的三个属性(location,match,history)
  
  //监控路由变化history  history.listen((link) => {
                  // link.pathname  切换路径
  // })
  props.history.listen(link => {
    // console.log(link)
  })
  //编程式导航
  //props.history.push('/xxxxx')

  //路由传参
  // parmas进行传参  优势：刷新地址，参数依然存在   缺点：只能传递字符串，参数过多的时候url过于丑陋
  // 1.需要在路由规则中设置传递的接受参数   ：xxx
  // 2.发送参数  直接在跳转路径后进行编写
  // 3.接收props.match.parmas.参数名
  
  //query方式
    // 1.不需要再路由规则中进行传递参数的配置
    // 2.直接发送数据
    // 3.使用this.props.location.query.xxx
  
  // console.log(props)
  return (
    <div className="App">
      
      <NavLink to={{pathname:'/Home',query:{name:'小米'}}}>点我去Home</NavLink>
      <br />
      <NavLink to="/Phone/aaaa">点我去Phone</NavLink>


      <Route path="/Home" component={Home} />
      <Route path="/Phone/:id" component={Phone} />

      <button onClick={() => {props.history.push('/Home')}}>点我去home</button>
    </div>
  );
}

export default withRouter(App);
