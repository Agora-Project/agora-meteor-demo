Router.onBeforeAction ->
  if (!Meteor.userId())
    this.render('fullPageAtForm')
  else
    $('.mdl-layout__drawer').removeClass('is-visible')
    this.next()

Router.configure
  layoutTemplate: 'layout'
