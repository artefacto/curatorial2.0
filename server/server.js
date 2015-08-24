Meteor.startup(function() {

  if(Items.find().count()) {

  var items = JSON.parse(Assets.getText("data/sample-data.json"));

  for (var i = 0, len = items.length; i < len; i++) {
    var item = items[i];

    Items.insert({
      title: item.title,
      url: item.url,
      description: item.description,
      order: item.order,
      date: item.date,
      medium: item.medium,
      categoryName: item.categoryName,
      artist: item.artist
    });
  }
}

  if (Categories.find().count() === 0) {
    // Some initial categories
    Categories.insert({
      name: 'Beards'
    });
    Categories.insert({
      name: 'Pirates'
    });
    Categories.insert({
      name: 'Cats'
    });
    Categories.insert({
      name: 'Mustaches'
    });
    Categories.insert({
      name: 'Boredom'
    });
    Categories.insert({
      name: 'Canada'
    });
  }
});


Meteor.publish("items", function() {
  return Items.find();
});

Meteor.publish("categories", function() {
  return Categories.find();
})

// return the user's own annotations only
Meteor.publish('itemAnnotations', function() {
  return Annotations.find({
    author: this.userId
  });
});

Sortable.collections = Items;
Sortable.collections = Favorites;
