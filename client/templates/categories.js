Template.categories.helpers({
  Categories:function() {
    return Categories.find();
  },

  category:function() {
    return  Session.get('category');
  }

});
