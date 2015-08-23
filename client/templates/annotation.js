Meteor.subscribe("annotations");


Template.annotation.helpers({
  annotation: function(){
    return Annotations.find();
  }
})


AutoForm.hooks({
  createAnnotation: {
    before: {
      method: function(doc) {
        doc.itemId = Template.instance().data.Item._id
        return doc;
      }
    }
  }
});
