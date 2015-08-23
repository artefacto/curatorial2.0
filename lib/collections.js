Items = new Mongo.Collection('items');
Categories = new Mongo.Collection('categories');
Annotations = new Mongo.Collection('annotations');



Items.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  description: {
    type: String,
    label: "description",
    optional: true
  },
 medium: {
    type: String,
    label: "medium",
    optional: true
  },
  catName: {
    type: String,
    label: "category",
    optional: true
  },
  url: {
    type: String,
    label: "url",
    optional: true
  },
  order: {
    type: Number,
    label: "order",
    optional: true
  },
  medium: {
    type: String,
    label: "order",
    optional: true
  },
  date: {
    type: Number,
    label: "order",
    optional: true
  },
  artist: {
    type: String,
    label: "artist",
    optional: true
  },
  shelfmark: {
    type: String,
    label: "shelfmark",
    optional: true
  }
}));


Annotations.attachSchema(new SimpleSchema({
  itemId: {
    type: Number,
    label: "itemID",
    optional: true
  },
  subject: {
    type: String,
    label: "Subject",
    max: 200
  },
  body: {
    type: String,
    label: "Body",
    optional: true
  },
  author: {
    type: String,
    label: "Author",
    optional: true
  }
  // private: {
  //   type: Boolean,
  //   label: "Private?",
  //   optional: true
  // }
  }));
