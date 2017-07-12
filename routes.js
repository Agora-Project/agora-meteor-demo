Router.onBeforeAction(function() {
    $('.mdl-layout__drawer').removeClass('is-visible');
    return this.next();
});

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/about', function() {
    return this.render('about');
});

Router.route('/', function() {
    return this.redirect("/forum");
});
