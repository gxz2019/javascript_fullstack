import axios from 'axios'
import * as actionTypes from './actionTypes'
const changeHomeData = (result) => {
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  }
}
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })
  }
}
const getMoreData = (result,page) => {
  return {
    type:actionTypes.GET_MORE_DATA,
    articleList:result,
    page:page
  }
}
export const getBtnClick = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then(res => {
      const result = res.data.list;
      dispatch(getMoreData(result,page+1))
    })
  }
}

export const toggleTopShow = (show) => {
  return {
    type:actionTypes.TOGGLE_SCROLL,
    show:show
  }
}