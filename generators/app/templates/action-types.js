export default {
<%_ for (let { upperCase } of actions) { -%>
  <%= upperCase %>: '<%= upperCase %>' ,
<%_ } -%>
}
