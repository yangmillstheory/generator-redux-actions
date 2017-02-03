<% actions.forEach((({ upperCase }), index) => { %>
  <% if (index === 0) { %>
export default {
  <% } %>
  <%= upperCase %>: '<%= upperCase %>',
  <% if (index === actions.length - 1) { %>
}
  <% } %>
<% } %>

