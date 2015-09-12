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


    this.route('slideshow', {
        path: '/slideshow'
    });

    this.route('browse_by_popularity', {
        waitOn: function() {
            return [Meteor.subscribe('items'), Meteor.subscribe('favorites')];
        },
        data: function(){
            return Items.find.fetch()
        },
        path: '/most_collected'
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



Router.route('/item/:slug', {
    name: 'itemShow',
    template: 'itemShow',
    subscriptions: function() {
        return Meteor.subscribe('singleItem', this.params.slug);
    },
    data: function() {
        var item = Items.findOne({"slug": this.params.slug});
        if (item) {
            return item;
        }
    }
});

Router.route('/category/:name', {
    name: 'byCategory',
    template: 'browse_by_category',
    data: function(){
        Session.set('category',this.params.name);
        var category = category

        return Items.findOne({ categoryName: category });
    }
});

Router.plugin('ensureSignedIn', {
  only: ['myCollection', 'admin']
});


