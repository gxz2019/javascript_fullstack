import React, { Component } from 'react';
// import antd from 'antd'
import 'antd/dist/antd.css'
import {Input} from 'antd'

class todoList extends Component {
  render() {
    return (
      <div>
        <div style={{width:'150px'}}>
          <Input />
        </div>
      </div>
    );
  }
}

export default todoList;