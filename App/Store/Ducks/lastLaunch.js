import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  addLastLaunch: ['last'],
})

const INITIAL_STATE = {}

const add = (state = INITIAL_STATE, action) => {
  return action.last
}

export default createReducer(INITIAL_STATE, {
  [Types.ADD_LAST_LAUNCH]: add,
})
