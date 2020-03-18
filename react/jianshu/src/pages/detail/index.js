import React, { Component } from 'react';
import { DetailWrapper,Header,Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
class Detail extends Component {
  componentDidMount() {
    this.props.getDetail()
  }
  render() {
    const { title,content} = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html:content}}>
        </Content>
      </DetailWrapper>
    );
    }
  }
const mapState = (state) => {
  return {
    title:state.detail.get('title'),
    content:state.detail.get('content')
  }
}
const mapDispatch = (dispatch) => {
  return {
    getDetail(){
      const action = actionCreators.getDetail()
      action(dispatch)
    }
  }
}
export default connect(mapState,mapDispatch)(Detail)