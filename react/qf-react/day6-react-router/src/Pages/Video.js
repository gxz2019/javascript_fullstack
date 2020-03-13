import React from 'react'
import {Route,Link} from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'

export default function Video() {
  return (
    <div>
      <div className="topNav">
          <ul>
            <li><Link to='/video/ReactPage'>React教程</Link></li>
            <li><Link to='/video/Flutter'>Flutter教程</Link></li>
            <li><Link to='/video/Vue'>Vue教程</Link></li>
          </ul>
      </div>
      <div className='videoContent'>
          <div><h3>视频教程</h3></div>
          <Route path='/video/ReactPage' component={ReactPage}></Route>
          <Route path='/video/Flutter' component={Flutter}></Route>
          <Route path='/video/Vue' component={Vue}></Route>
      </div>
    </div>
  )
}