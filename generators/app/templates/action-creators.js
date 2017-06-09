import { createActions } from 'redux-actions'
import { actionTypes } from './action-types'

// uncomment to query state in thunks
//
// import { selectors } from './reducers'

const actionCreators = createActions(...Object.values(actionTypes))

export default actionCreators

<%_ if (installAsync) { -%>
  <%_ for (let i = 0; i < actions.length; i++) { -%>
    <%_ const { camelCase } = actions[i] -%>
export function <%= camelCase %>() {
  return (dispatch, getState) => {
    // delegate to actionCreators.<%= camelCase %>
  }
}
    <%_ if (i !== actions.length - 1) { -%>

    <%_ } -%>
  <%_ } -%>
<%_ } -%>

