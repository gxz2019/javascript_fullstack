import React, { Component } from 'react';
import { connect } from 'react-redux'   //连接器
class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {inputValue,getValue,clickBtn,data,deleteItem} = this.props
    return (
      <div>
        <div>
          <input 
          type="text" 
          placeholder="write" 
          value={inputValue}
          onChange={getValue} />
          <button onClick={clickBtn}>添加</button>
          <ul>
            {data.map((i,v) => {
              return <li key={v} onClick={() => {deleteItem(v)}}>{i}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const stateToProps = (state) => {
  return {
    inputValue:state.inputValue,
    data:state.data
  }
}
const dispatchToProps = (dispatch) => {
  return {
    getValue(e){
      dispatch({
        type:'getValue',
        value:e.target.value
      })
    },
    clickBtn() {
      dispatch({
        type:'addItem'
      })
    },
    deleteItem(i) {
      dispatch({
        type:'deleteItem',
        index:i
      })
    }
  }
}

export default connect(stateToProps,dispatchToProps)(TodoList);