const defaultState = {
  inputValue:'',
  data:[]
}

export default (state=defaultState,action) => {
  if(action.type === 'getValue') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === 'addItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.data.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === 'deleteItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.data.splice(action.index,1)
    return newState
  }
  return state
}