import { combineReducers } from 'redux'
import menu from './menu'
import pages from './pages'

// import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  menu,
  pages,
})

export default rootReducer
