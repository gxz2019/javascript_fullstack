import {GET_VALUE,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
var defaultState = {
  inputValue:'',
  data:[]
}
var reducer = (state=defaultState,action) => {
  if(action.type === GET_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data.splice(action.index,1)
    return newState
  }
  if(action.type === GET_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data = action.data
    return newState
  }
  return state
}

export default reducer