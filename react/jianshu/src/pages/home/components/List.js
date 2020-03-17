import React, { Component } from 'react';
import { ListItem,ListContent, ListMeta} from '../style'
import {connect} from 'react-redux'
class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map((i,v) => {
            return (
              <ListItem key={i.get('id')}>
        <ListContent>
            <h3>{i.get('title')}</h3>
          <span>
            {i.get('desc')}
          </span>
          <ListMeta>
            <span className='iconfont' style={{color:'#EA6F5A'}}>&#xe629;177.9</span>
            <span>林双儿</span>
            <span className='iconfont'>&#xe644;154</span>
            <span className='iconfont'>&#xe601;1034</span>
            <span className='iconfont'>&#xe604;</span>
          </ListMeta>
        </ListContent>
        <img src={i.get('imgUrl')} alt="" />
      </ListItem>
            )
          })
        }
      </div>
    );
  }
}
const getState = (state) => {
  return {
    list:state.home.get('articleList')
  }
}

export default connect(getState,null)(List);