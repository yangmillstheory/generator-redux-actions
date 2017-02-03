export default {
<% for (let action of actionTypes) { %>
  <%= action %>: '<%= action %>',
<% } %>
}

