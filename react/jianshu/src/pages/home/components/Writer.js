import React, { Component } from 'react';
import { WriterWrapper, WriteTitle, AuthorList } from '../style'
import { connect } from 'react-redux'
import { getAuthorList } from '../store/actionCreators'
class Writer extends Component {
  componentDidMount() {
    this.props.getAuthorList()
  }
  render() {
    const { list } = this.props
    return (
      <WriterWrapper>
        <WriteTitle>
          <span>推荐作者</span>
          <span className="span">换一批</span>
        </WriteTitle>
        {
          list.map((i) => {
            return (
              <AuthorList key={i.id}>
                <img src={i.imgUrl} alt="" />
                <div>
                  <span>{i.author}</span>
                  <span>{i.content}</span>
                  <span>＋关注</span>
                </div>
              </AuthorList>
            )
          })
        }
      </WriterWrapper>
    );
  }
}
const mapDispatch = (dispatch) => {
  return {
    getAuthorList() {
      const action = getAuthorList()
      action(dispatch)
    }
  }
}
const mapState = (state) => {
  return {
    list: state.home.get('authorList')
  }
}
export default connect(mapState, mapDispatch)(Writer);