import React, { Component,useState } from 'react';

//useState是用来定义状态的 他与类组件的状态不同 函数组件的状态可以是对象也可以是基础类型数据
//useState返回的是一个数组 第一个是当前的状态值 第二个是对象表明用于更改状态的函数(类似于setState)


//可以使用react Hook 中的useState 来进行实现
// function Hook(props) {
//   let [val,set] = useState(0)
//   return (
//     <div>
//       hook组件
//       {val}
//       <button onClick={() => {set(val + 1)}}>click</button>
//     </div>
//   )
// }

//如果有多个状态怎么办？
//1.声明对象类型的状态
//2.多次声明
function Hook(props) {
  let [val,set] = useState({
    val1:0,
    val2:1,
    val3:3
  })
  return (
    <div>
      hook组件
      {val.val1}
      <button onClick={() => {set(val.val1 + 1)}}>click</button>
    </div>
  )
}

export default Hook;  