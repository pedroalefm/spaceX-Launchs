import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  addLaunchs: ['launchs'],
})

const INITIAL_STATE = []

const add = (state = INITIAL_STATE, action) => [...state, action.launchs]

export default createReducer(INITIAL_STATE, {
  [Types.ADD_Launchs]: add,
})
