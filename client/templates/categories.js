Template.categories.helpers({
  Categories:function() {
    return Categories.find();
  },

  category:function() {
    return  Session.get('category');
  },
  categoryCount: function(){
//    return Todos.find({ completed: true }).count();

   var category = Categories.findOne(this.params._id);
   var currentCategory =  category.name;
    return Items.find({categoryName:currentCategory}).count();

  }

});
