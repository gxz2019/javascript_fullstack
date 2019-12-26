import React, { Component , Fragment} from 'react';
import XiaoJieJieItem from './XiaoJieJieItem'
class XiaoJieJie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue :'',
      list :['基础按摩','精油推背']
    }
  }
  render() { 
    return ( 
      <Fragment>
        <div>
          <label htmlFor="gxz">加入服务:</label>
        <input id="gxz" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}>增加服务</button></div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <XiaoJieJieItem key={index} content={item} index={index} deleteItem={this.deleteItem.bind(this)} />
            })
          }
        </ul>
        
      </Fragment>
     );
  }
  inputChange(e) {
    // console.log(e.target.value)
    let Value = e.target.value
    this.setState({
      inputValue:Value
    })
    // console.log(this.state.inputValue)
  }
  addList() {
    this.setState({
      list : [...this.state.list , this.state.inputValue],
      inputValue:''
    })
  }
  deleteItem(index) {
    this.state.list.splice(index,1)
    this.setState({
      list: this.state.list
    })
  }
}
 
export default XiaoJieJie;