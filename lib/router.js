Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',

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



// this.route('/item/:_id',{name: 'items.show'} function () {
//   this.render('item', {
//     data: function () {
//       return Items.findOne({_id: this.params._id});
//     }
//   });
// });

// Router.route('/posts/:_id', function () {
//   this.render('Post');
// }, {
//   name: 'post.show'
// });

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

// Router.route('/item/:_id', {name: 'item.show'});

//version adding annotations to items with a join using iron router
// Router.route('/item/:_id', {
//     name: 'itemShow',
//     template: 'itemShow',
//     waitOn: function() {
//        return [
//            Meteor.subscribe('item', this.params.id),
//            Meteor.subscribe('itemAnnotations', this.params.id)
//        ]
//      },
//     data: function(){
//       item: Items.findOne({_id: this.params.id}),
//       itemAnnotations: Annotations.find({itemId: this.params.id})
//     }
// });

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
