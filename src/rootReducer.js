import { combineReducers } from 'redux'

import { peliculas, series, milista, home } from './reducers'

export default combineReducers({
  peliculas,
  series,
  milista,
  home
})
