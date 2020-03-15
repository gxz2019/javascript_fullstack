const defaultState = {
  focused:false
}

export default (state=defaultState,action) => {
  if(action.type==='search_focus') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.focused = true
    return newState
  }
  if(action.type ==='bandle_foucs') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.focused = false
    return newState
  }
  return state
}