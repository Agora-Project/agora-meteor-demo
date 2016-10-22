if (Meteor.isServer){
    Meteor.methods({
        "userExists": function(name){
            return !!Meteor.users.findOne({name: name});
        },
    });
}

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    required: true,
    func: function(value){
        if (Meteor.isClient) {
            console.log("Validating username...");
            var self = this;
            Meteor.call("userExists", value, function(err, userExists){
                if (!userExists)
                    self.setSuccess();
                else
                    self.setError(userExists);
                self.setValidating(false);
            });
            return;
        }
        // Server
        return Meteor.call("userExists", value);
    },
});

AccountsTemplates.configure({
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,
  showAddRemoveServices: false,
  showForgotPasswordLink: false,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,
  homeRoutePath: '/forum',
  redirectTimeout: 4000
});

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('changePwd');

AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join'
});
