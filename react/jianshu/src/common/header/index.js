import React from 'react'
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
import * as actionCreators from './store/actionCreators'
import { Link } from 'react-router-dom'
function Header(props) {
  return  (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">
          <a href='/' className='active'>首页</a>
        </NavItem>
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
    focused:state.header.get('focused')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFoucs())
    },
    bandleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)