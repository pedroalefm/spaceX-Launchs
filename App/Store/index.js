import { createStore } from 'redux'

import reducers from './Ducks'

const store = createStore(reducers)

export default store
