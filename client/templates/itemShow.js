

Meteor.subscribe("itemAnnotations");
//Meteor.subscribe("publishedAnnotations");
Template.itemShow.helpers({
  annotations: function(){
    return Annotations.find({itemId: this._id});
  },
   sharedAnnotations: function(){
       return Annotations.find({itemId: this._id, publish: true});
   },

  currentPage: function(){
        if (Iron.Location.get().rootUrl.length) {
          return Iron.Location.get().href
// return Router.current().url
        } else {
          return "http://curatorial.us"
        }


      }



})
