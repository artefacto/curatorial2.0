

Meteor.subscribe("itemAnnotations");

Template.itemShow.helpers({
  annotations: function(){
    return Annotations.find();
  }

})
