import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  addLaunchs: ['launchs'],
})

const INITIAL_STATE = []

const add = (state = INITIAL_STATE, action) => {
  return action.launchs
}

export default createReducer(INITIAL_STATE, {
  [Types.ADD_LAUNCHS]: add,
})
