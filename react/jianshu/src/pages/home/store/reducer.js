import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList:[],
  articleList: [],
  recommendList: [],
  articlePage:1,
  showScroll:false,
  authorList:[],
  num:20,
})
const changeHomeData = (state,action) =>{
  return state.merge({
    topicList:fromJS(action.topicList),
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList)
  })
}
const getMoreData = (state,action) => {
  return state.merge({
    articleList:fromJS([...state.get('articleList'),...action.articleList.splice]),
    articlePage:fromJS(action.page)
  })
}
const toggleScroll = (state,action) => {
  return state.set('showScroll',action.show)
}
const getAuthorList = (state,action) => {
  return state.set('authorList',action.data)
}
export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_HOME_DATA:
      return  changeHomeData(state,action)
    case actionTypes.GET_MORE_DATA:
      return getMoreData(state,action)
    case actionTypes.TOGGLE_SCROLL:
      return toggleScroll(state,action)
    case actionTypes.GET_AUTHOR_LIST:
      return getAuthorList(state,action)
      default:
        return state
  }
}