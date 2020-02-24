import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value:"",
      bookList:[{
        name:'js',value:100
      },{
        name:'css',value:50
      },{
        name:'html',value:60
      }]
    }
  }
  handChange(e) {
    // console.log(e.target.value)
    this.setState({
      value:e.target.value
    })
  }
  handClick(target) {
    this.setState({
      bookList:[...this.state.bookList,target],
      value:''
    })
  }
  render() { 
    return ( 
      <div >
        <h1>React 购物车</h1>
        <input type="text" value={this.state.value} onChange={this.handChange.bind(this)} />
        <button onClick={() => this.handClick(this.state.value)}>添加商品</button>
        
        {
          this.state.bookList.map((item,index) => {
          return  [<li key={index}>{item.name}</li>,<button key={item}>购买</button>]
          })
        }
        


        
      </div>
     );
  }
}
 
export default App
