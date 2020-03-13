import React from 'react'
import {Route,Link} from 'react-router-dom'
import Money from './workplace/money'
import Getup from './workplace/getup'
export default function Workplace() {
  return (
    <div>
      <div>
        <h2>程序员职业规划</h2>
        <div>
          <ul>
            <li><Link to="/workplace/money">加薪秘籍</Link></li>
            <li><Link to="/workplace/getup">起床秘籍</Link></li>
          </ul>
        </div>
        <div>
          <Route path="/workplace/money" component={Money}></Route>
          <Route path="/workplace/getup" component={Getup}></Route>
        </div>
      </div>
    </div>
  )
}