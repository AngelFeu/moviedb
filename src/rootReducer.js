import { combineReducers } from 'redux'

import { peliculas, series, milista } from './reducers'

export default combineReducers({
  peliculas,
  series,
  milista
})
