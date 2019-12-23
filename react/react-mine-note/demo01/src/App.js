import React,{Component} from 'react'
import Test from './test'

class App extends Component{
  constructor(props) {
    super(props) 
    this.state = {
      inputValue:'',
      intmList:[]
    }
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}>点击</button>
        {/* <ul>
          
            {
              this.state.intmList.map((item,index) => {
              return <li key={index + item} onClick={this.deleteItem.bind(this,index)}
              dangerouslySetInnerHTML={{__html:item}} ></li>
              })
            }
          
        </ul> */}
        <ul>
          {
            this.state.intmList.map((item,index) => {
              return (
                <Test content={item} key={index+item} index={index} deleteItem={this.deleteItem.bind(this)} />
              )
            })
          }
        </ul>
      </div>
    )
  }
  inputChange(e) {
    // console.log(e.target.value)
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue:e.target.value
    })
  }
  addList() {
    this.setState({
      intmList:[...this.state.intmList,this.state.inputValue],
      inputValue:''
    })
  }
  deleteItem(index) {
    let list = this.state.intmList;
    list.splice(index,1)
    this.setState({
      intmList:list
    })
  }
}

export default App