Meteor.subscribe("itemAnnotations");
Meteor.subscribe("publishedAnnotations")

Template.annotation.helpers({
  annotation: function(){
    return Annotations.find();
  },
  publicAnnotations: function(){
    return Annotations.find({publish: true})
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
