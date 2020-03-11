import {GET_VALUE,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
import axios from 'axios'

export const getValueAction = (val) => {
  return {
    type:GET_VALUE,
    value:val
  }
}
export const addItemAction = () => {
  return {
    type:ADD_ITEM,
  }
}
export const deleteItemAction = (index) => {
  return {
    type:DELETE_ITEM,
    index:index
  }
}
export const getListAction = (data) => {
  return {
    type:GET_LIST,
    data:data
  }
}

export const getTodoLsit = () => {
  return (dispatch) => {
    axios.get('http://localhost:4000/data').then(res =>{
      const data = res.data.list;
      const action =  getListAction(data)
      dispatch(action)
    })
  }
}