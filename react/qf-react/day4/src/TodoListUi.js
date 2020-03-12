import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List} from 'antd'

class TodoListUi extends Component {
  render() {
    return (
      <div>
        <div>
          <Input 
          placeholder="Write Something" 
          style={{width:'200px',margin:'10px'}}
          onChange={this.props.getValue}
          ></Input>
          <Button type='primary'>添加</Button>
        </div>
        <div>
          <List bordered
                dataSource={this.props.data}
    renderItem={(item,index) => {return <List.Item>{item}</List.Item>}}
          ></List>
        </div>
      </div>
    );
  }
}

export default TodoListUi;