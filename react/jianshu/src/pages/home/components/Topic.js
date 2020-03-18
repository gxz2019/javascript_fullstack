import React, { Component } from 'react';
import { TopicItem, TopicWrapper } from '../style'
import { connect } from 'react-redux'
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((i, v) => {
            return (
              <TopicItem key={i.get('id')}>
                <img className='topic-pic' src={i.get('imgUrl')} alt="" />
                {i.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.home.get('topicList')
  }
}
export default connect(mapStateToProps, null)(Topic);