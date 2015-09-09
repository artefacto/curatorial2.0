Template.myCollection.helpers({
  annotations: function(){
    return Annotations.find({itemId: this._id});
  },
  myFavorites: function(){
    return Favorites.find();
  }

})
