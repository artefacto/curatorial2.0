Session.setDefault('category', null);


Template.browse_by_category.helpers({
    currentCategory: function(){
        return  Session.get('category');

    },
    categoryItems: function(category){
       var currentCategory =  Session.get('category')

        return Items.find({categoryName:currentCategory});

    },

    noCategory:function() {
        return Session.equals('category',null);
    }
});