import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style'
import {connect} from 'react-redux'
function Header(props) {
  return  (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition 
            timeout={200} 
            in={props.focused}
            classNames="slide"
          >
            {/* slide-enter slide-enter-active  slide-exit slide-exit-active */}
            <NavSearch 
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.bandleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe7c2;</span>写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    focused:state.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type:'search_focus'
      }
      dispatch(action)
    },
    bandleInputBlur() {
      const action = {
        type:'bandle_foucs'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)