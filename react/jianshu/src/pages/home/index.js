import React, { Component } from 'react';
import { HomeWrapper,HomeLeft,HomeRight} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
class Home extends Component {
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
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;