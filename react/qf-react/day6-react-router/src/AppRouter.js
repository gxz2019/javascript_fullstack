import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css'
import index from './Pages/index'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'
// let routeConfig =[
//   {path:'/',title:'博客首页',exact:true,component:Index},
//   {path:'/video/',title:'视频教程',exact:false,component:Video},
//   {path:'/workplace/',title:'职场技能',exact:false,component:Workplace}
// ]
class AppRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="mainDiv">
            <div className="leftNav">
              <h3>一级导航</h3>
              <ul>
                <li><Link to="/">博客首页</Link></li>
                <li><Link to="/video/">视频教程</Link></li>
                <li><Link to="/workplace/">职业规划</Link></li>
              </ul>
            </div>
            <div className="rightMain">
              <Route path="/" exact component={index}></Route>
              <Route path="/video/" component={Video}></Route>
              <Route path="/workplace/" component={Workplace}></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default AppRouter;