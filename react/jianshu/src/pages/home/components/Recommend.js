import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'
class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper >
        {
          this.props.list.map((i, v) => {
            return (
              <RecommendItem imgUrl={i.get('imgUrl')} key={i.get('id')}>

              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    );
  }
}
const getState = (state) => {
  return {
    list: state.home.get('recommendList')
  }
}

export default connect(getState, null)(Recommend); 