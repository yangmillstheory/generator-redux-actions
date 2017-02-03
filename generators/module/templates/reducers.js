import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import actionTypes from './action-types'

// use reducer composition and combineReducers to refactor this
const exampleReducer = handleActions({
<% for (let action of actionTypes) { %>
  [actionTypes.<%= action %>](state, action) {
    // return previous state or new reference 
  },
<% } %>
})
export default combineReducers({ exampleReducer })

export const selectors = {
  // write your selectors here
}
