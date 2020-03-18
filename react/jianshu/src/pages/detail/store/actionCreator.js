import * as actionTypes from './actionTypes'
import axios from 'axios'


const getDetailAction = (value) => {
  return {
    type:actionTypes.GET_DETAIL,
    data:value
  }
}
export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      const data = res.data.data.list;
      dispatch(getDetailAction(data))
    })
  }
}