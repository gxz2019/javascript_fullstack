import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/index'
import homeReduer from '../pages/home/store/reducer'

export default combineReducers({
  header:headerReducer,
  home:homeReduer
})