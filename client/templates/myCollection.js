Template.myCollection.helpers({
  annotations: function(){
    return Annotations.find({itemId: this._id});
  }

})
