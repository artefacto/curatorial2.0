Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  waitOn: function(){
    return [Meteor.subscribe('items'), Meteor.subscribe('itemAnnotations')];
  }

});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('about');
  this.route('contact');


this.route('Admin', {
  path: '/admin',
  template: 'Admin',
  onBeforeAction: AccountsTemplates.ensureSignedIn
});


this.route('myCollection', {
  path: '/my_collection',
  onBeforeAction: AccountsTemplates.ensureSignedIn
});



this.route('items', {
        layoutTemplate:'layout',

        path:'/:name',

        waitOn: function() {
            return [Meteor.subscribe('items'), Meteor.subscribe('favorites')];
          },
        data: function() {
            Session.set('category',this.params.name);
            //return Items.find({category:category});
            },
        template:'layout'
    });

});



Router.route('/item/:_id', {
    name: 'itemShow',
    template: 'itemShow',
    data: function(){
        var currentItem = this.params._id;
        return Items.findOne({ _id: currentItem });
    }
});

Router.route('/category/name', {
    name: 'byCategory',
    template: 'browse_by_category',
    data: function(){
        var category = category;
        return Items.findOne({ category: catName });
    }
});



Router.plugin('ensureSignedIn', {
  only: ['myCollection', 'admin']
});

// AccountsTemplates.configureRoute('signIn', {
//   name: 'signin',
//   path: '/login',
//   template: 'login',
//   layoutTemplate: 'login',
//   redirect: '/admin',
// });
