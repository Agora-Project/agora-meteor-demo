AccountsTemplates.configure
  confirmPassword: true
  enablePasswordChange: true
  forbidClientAccountCreation: false
  overrideLoginErrors: true
  sendVerificationEmail: false
  lowercaseUsername: false

  showAddRemoveServices: false
  showForgotPasswordLink: false
  showLabels: true
  showPlaceholders: true
  showResendVerificationEmailLink: false

  continuousValidation: false
  negativeFeedback: false
  negativeValidation: true
  positiveValidation: true
  positiveFeedback: true
  showValidating: true

  homeRoutePath: '/forum'
  redirectTimeout: 4000

AccountsTemplates.configureRoute 'signIn'
AccountsTemplates.configureRoute 'changePwd'
