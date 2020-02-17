import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text :'',
//       itemList:[]
//     }
//   }
//   handDelete = (index) => {
//     // console.log(index)
//     // this.state.itemList.splice(index,1)
//     this.setState({
//       itemList:this.state.itemList
//     })
//   }
//   handClick = () => {
//     // this.state.itemList.push(this.state.text)
//     if(this.state.text == '') {
//       alert('请输入文字')
//     }else{
//       this.setState({
//         itemList:[...this.state.itemList,this.state.text],
//         text:''
//       })
//     }
//   }
//   handChange = (e) => {
//     // console.log(e.target.value)
//     let text = e.target.value
//     this.setState({
//       text:text
//     })
//   }
//   render() { 
//     return ( 
//       <div>
//         {this.state.text}
//         <input type="text" value={this.state.text} onChange={this.handChange} />
//         <button onClick={this.handClick}>clear</button>
//         <ul>
//           {this.state.itemList.map((item,index) => {
//             return <li key={index} onClick={() => this.handDelete(index)}>{item}</li>
//           })}
//         </ul>
//       </div>
//      );
//   }
// }
 
// export default App;

//react16 新特性
//1.render函数支持返回数组和字符串
//2.异常处理，添加componentDidCatch钩子函数获取组件错误
class App extends Component {
  
  render() { 
    return ( 
      <div></div>
     );
  }
}
 
export default App;