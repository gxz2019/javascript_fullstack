import React, { Component } from 'react';
import { ListItem, ListContent, ListMeta, LoadMore } from '../style'
import { connect } from 'react-redux'
import { getBtnClick } from '../store/actionCreators'
class List extends Component {
  render() {
    const { num,list} = this.props
    return (
      <div> 
        {
          list.slice(0,num).map((i, v) => {
            return (i.get('imgUrl') ?
              (<ListItem key={v}>
                <ListContent>
                  <a href='/detail'>
                    <h3>{i.get('title')}</h3>
                  </a>
                  <span>
                    {i.get('abstract')}
                  </span>
                  <ListMeta>
                    <span className='iconfont' style={{ color: '#EA6F5A' }}>&#xe629;{i.get('meta')}</span>
                    <span>{i.get('author')}</span>
                    <span className='iconfont'>&#xe644;{i.get('meta2')}</span>
                    <span className='iconfont'>&#xe601;{i.get('meta3')}</span>
                    <span className='iconfont'>&#xe604;</span>
                  </ListMeta>
                </ListContent>
                <img src={i.get('imgUrl')} alt="" />
              </ListItem>
              ) : null)
          })
        }
        {
          num <list.toJS().length? (<LoadMore onClick={() => { this.props.getMoreList(this.props.page) }}>阅读更多</LoadMore> )
          :<LoadMore>没有啦~</LoadMore>
        }
        
      </div>
    );
  }
}
const getState = (state) => {
  return {
    list: state.home.get('articleList'),
    page: state.home.get('articlePage'),
    num: state.home.get('num')
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