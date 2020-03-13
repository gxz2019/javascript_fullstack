import axios from 'axios'
import {GET_VALUE,GET_DATA} from './actionType'

export const getValue = (val) => {
  return {
    type:GET_VALUE,
    value:val
  }
}

// export const getDataList = (data) => {
//   return {
//     type:GET_DATA,
//     data:data
//   }
// }

export const getData = () => {
 return  (dispatch) => {
  axios.get('http://localhost:4000/list').then(res => {
    const data = res.data;
    const action = {
      type:GET_DATA,
      data:data
    }
    dispatch(action)
  })
 }
} 