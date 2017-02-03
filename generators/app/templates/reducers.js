import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import actionTypes from './action-types'

// use reducer composition and combineReducers to refactor this
const exampleReducer = handleActions({
<%_ for (let i = 0; i < actions.length; i++) { -%>
  <%_ const { upperCase } = actions[i] -%>
  [actionTypes.<%= upperCase %>](state, action) {
    // return previous state or new reference 
  },
  <%_ if (i === actions.length - 1) { -%>
})
  <%_ } else { -%>

  <%_ } -%>
<%_ } -%>

export default combineReducers({ exampleReducer })

export const selectors = {
  // write your selectors here
}
