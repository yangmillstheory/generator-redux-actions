import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import actionTypes from './action-types'

<% for (let { upperCase } of actions) { %>
  <% if (index === 0) { %>
// use reducer composition and combineReducers to refactor this
const exampleReducer = handleActions({
  <% } %>
  [actionTypes.<%= upperCase %>](state, action) {
    // return previous state or new reference 
  },
<% if (index === actions.length - 1) { %>
})
  <% } %>
<% } %>
export default combineReducers({ exampleReducer })

export const selectors = {
  // write your selectors here
}
