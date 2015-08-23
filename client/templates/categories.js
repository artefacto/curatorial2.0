Session.setDefault('category', null);


Template.categories.helpers({
  Categories:function() {
    return Categories.find();
  },

  catnotselected:function() {
    return Session.equals('category',null);
  },
  category:function() {
    return  Session.get('category');
  },
categoryList: function(){
    return Items.find({categoryName:Session.get('category')});
    // var currentCategory = Session.get('category'
    // return Items.find({ category:currentCategory});

  }

});
