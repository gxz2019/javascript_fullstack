import React, { Component } from 'react';
import { HomeWrapper,HomeLeft,HomeRight,Back} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import DownLoad from './components/Download'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { getHomeInfo,toggleTopShow } from './store/actionCreators'
class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
  handleScrollTop() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
        <img className='banner-img' src="https://upload-images.jianshu.io/upload_images/8357505-951bf44017330232.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
        <Topic></Topic>
        <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <DownLoad></DownLoad>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ? <Back onClick={this.handleScrollTop}>顶</Back>:null
        }
      </HomeWrapper>
    );
  }
}
const mapState = (state) => {
  return {
    showScroll:state.home.get('showScroll')
  }
}
const mapDispatch = (dispatch) =>{
  return {
    changeHomeData() {
      let action = getHomeInfo()
      action(dispatch)
    },
    changeScrollTopShow(e){
      // console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop >= 350) {
        dispatch(toggleTopShow(true))
      }else{
        dispatch(toggleTopShow(false))
      }
    }
  }
}
export default connect(mapState,mapDispatch)(Home);