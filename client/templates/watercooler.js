Template.watercooler.helpers({

    myFavorites: function(){
        return Favorites.find({});
    },
    mySharedAnnotations: function(){
        return Annotations.find({publish: true})
    }

})