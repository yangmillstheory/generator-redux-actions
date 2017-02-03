import { createActions } from 'redux-actions'
import { actionTypes } from 'action-types'

// uncomment to query state in thunks
// 
// import { selectors } from './reducers'

const actionCreators = createActions(...Object.values(actionTypes))

export default actionCreators

<% for (let action of actionTypes) { %>
export function <%= action %>() {
  return (dispatch, getState) => {
    // delegate to actionCreators.<%= action %> 
  }
}
<% } %>
  
