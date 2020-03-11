import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoListui extends Component {
  render() {
    return (
      <div>
        <div>
          <Input style={{ width: '200px' }}
            placeholder='qingshuru'
            onChange={this.props.getValue}
            value={this.props.inputValue} />
          <Button type='primary' onClick={this.props.clickBtn}>添加</Button>
          <List bordered dataSource={this.props.data}
            renderItem={(item, index) => { return <List.Item onClick={() => {this.props.deleteItem(index)}}>{item}</List.Item> }} />
        </div>
      </div>
    );
  }
}

export default TodoListui;