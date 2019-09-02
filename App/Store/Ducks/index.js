import { combineReducers } from 'redux'

import launchs from './launchs'
import last from './lastLaunch'

export default combineReducers({
  launchs,
  last,
})
