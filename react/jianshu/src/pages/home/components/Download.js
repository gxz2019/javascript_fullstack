import React, { Component } from 'react';
import { DownloadWrapper,DownContent,RqCode } from '../style'


class Download extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show:false
    }
  }
  OutEvents =() => {
    this.setState({
      show:false
    })
  }
  bindEvents = () => {
    this.setState({
      show:true
    })
  }
  render() {
    return (
      <div style={{height:'110px'}}>
        <DownloadWrapper onMouseOver={this.bindEvents} onMouseOut={this.OutEvents}>
        <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        <DownContent>
          <span className='span1'>下载简书手机APP ></span>
          <span className='span2'>随时随地发现和创作内容</span>
        </DownContent>
      </DownloadWrapper>
      {
        this.state.show ? (
          <RqCode className='Rqcode'>
      <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
      </RqCode>
        ) : null
      }
      </div>
    );
  }
}

export default Download;