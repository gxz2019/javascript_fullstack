import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/index'
import homeReduer from '../pages/home/store/reducer'
import * as detailReducer from '../pages/detail/store/'

export default combineReducers({
  header:headerReducer,
  home:homeReduer,
  detail:detailReducer.reducer
})