import { combineReducers } from 'redux'
// import menu from './menu'
import pages from './pages'
import events from './events'
import modal from './modal'
import location from './location';
// import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  // menu,
  pages,
  modal,
  location,
  events
})

export default rootReducer
