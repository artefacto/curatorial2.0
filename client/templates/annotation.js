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


Template.annotation.events({
      "click .toggle-checked": function () {
        // Set the publish property to the opposite of its current value
        Annotations.update(this._id, {
          $set: {checked: ! this.checked}
        });
      },
      'click .delete': function (e) {
        e.preventDefault();
        if (confirm("Delete this annotation forever?")) {

          Annotations.remove(this._id);
        }
      }
    });


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
