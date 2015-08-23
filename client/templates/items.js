Meteor.subscribe("items");
Meteor.subscribe("categories");

Meteor.subscribe('favorites');

Template.items.helpers({
  catnotselected:function() {
    return Session.equals('category',null);
  },
  category:function() {
    return  Session.get('category');
  },
  fullList:function(){
    return Items.find();
  },
  categoryList: function(){
    return Items.find({catName:Session.get('category')});

  },
  currentPage: function(){
    currentPage = Router.current().location.get().path;
    return currentPage;
  }

});
