Template.layout.events({
    'click .button-users': function() {
        return Router.go('/forum/users');
    },
    'click .button-home': function() {
        return Router.go('/forum');
    },
    'click #at-nav-button': function() {
        return Router.go('/sign-in');
    }
});

Template.layout.helpers({
    checkIfModerator: function() {
        return Roles.userIsInRole(Meteor.userId(), ['moderator']);
    }
});
