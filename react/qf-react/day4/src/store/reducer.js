const defaultState = {
  inputValue:'',
  data:[]
}

export default (state=defaultState,action) => {
  if(action.type === 'getValue') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === 'getData') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data = action.data
    return newState
  }
  return state
}