Router.onBeforeAction(function() {
    $('.mdl-layout__drawer').removeClass('is-visible');
    return this.next();
});

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/about', function() {
    return this.render('home');
});

Router.route('/', function() {
    return this.render('doubleView');
});

Router.route('/account', function() {
    return this.render('account');
});

Router.route('/settings', function() {
    return this.render('settings');
});

Router.route('/login', function() {
    return this.render('login');
});
