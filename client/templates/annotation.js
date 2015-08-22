Meteor.subscribe("annotations");


Template.annotation.helpers({
  annotation: function(){
    return Annotations.find();
  }
})
