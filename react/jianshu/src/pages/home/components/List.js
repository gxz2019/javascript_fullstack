import React, { Component } from 'react';
import { ListItem, ListContent, ListMeta,LoadMore } from '../style'
import { connect } from 'react-redux'
import { getBtnClick } from '../store/actionCreators'
class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map((i, v) => {
            return (
              <ListItem key={v}>
                <ListContent>
                  <a href='/detail'>
                  <h3>{i.get('title')}</h3>
                  </a>
                  <span>
                    {i.get('desc')}
                  </span>
                  <ListMeta>
                    <span className='iconfont' style={{ color: '#EA6F5A' }}>&#xe629;177.9</span>
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
        <LoadMore onClick={() => {this.props.getMoreList(this.props.page)}}>阅读更多</LoadMore>
      </div>
    );
  }
}
const getState = (state) => {
  return {
    list: state.home.get('articleList'),
    page:state.home.get('articlePage')
  }
}
const getDispatch = (dispatch) => {
  return {
    getMoreList(page) {
      let action = getBtnClick(page)
      action(dispatch)
    }
  }
}
export default connect(getState, getDispatch)(List);