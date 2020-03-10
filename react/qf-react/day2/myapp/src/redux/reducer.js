const defaultState = {
  inputValue:'Write Something',
  list:['a','b','c'] 
}

export default (state = defaultState,action) => {
  console.log(state,action)

  //reducer里面只能接收state  不能改变state
  if(action.type === 'changeInput') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}