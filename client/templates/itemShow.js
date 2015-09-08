

Meteor.subscribe("itemAnnotations");

Template.itemShow.helpers({
  annotations: function(){
    return Annotations.find({itemId: this._id});
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
