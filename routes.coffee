Router.onBeforeAction ->
  $('.mdl-layout__drawer').removeClass('is-visible')
  this.next()

Router.configure
  layoutTemplate: 'layout'

Router.route '/', ->
  this.render('home')

Router.route '/account', ->
  this.render('account')

Router.route '/settings', ->
  this.render('settings')

Router.route '/login', ->
  this.render('login')
