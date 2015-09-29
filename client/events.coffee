Template.layout.events
  'click .button-users': ->
    Router.go('/forum/users')
  'click .button-home': ->
    Router.go('/forum');
  'click #at-nav-button': ->
    Router.go('/sign-in');
