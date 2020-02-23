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


//ClickWriteError是一个组件
class ClickWriteError extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error:false
    }
  }
  handClick() {
    this.setState({
      error:true
    })
    console.log(111)
  }
  render() { 
    if(this.state.error) {
      throw new Error('出错了')
    }
    return <button onClick={() => this.handClick()}>抛出错误</button>
  }
}

class FeatureReturnFraments extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() { 
    return [
      <p key="key1">REACT</p>,
      <p key="key2">ANTID</p>
    ];
  }
}
 


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError:false
    }
  }
  render() { 
    return ( 
      <div>
        { this.state.hasError ? <div>出错了</div>:null }
        <ClickWriteError/>
        <FeatureReturnFraments/>
      </div>
     );
  }
}
 
export default App;