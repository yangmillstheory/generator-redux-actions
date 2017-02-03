import { createActions } from 'redux-actions'
import { actionTypes } from 'action-types'

// uncomment to query state in thunks
// 
// import { selectors } from './reducers'

const actionCreators = createActions(...Object.values(actionTypes))

export default actionCreators

<% if (installAsync) { %>
  <% for (let { camelCase } of actions) { %>
export function <%= camelCase %>() {
  return (dispatch, getState) => {
    // delegate to actionCreators.<%= action %> 
  }
}
  <% } %>
<% } %>
  
