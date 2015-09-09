Items = new Mongo.Collection('items');
Categories = new Mongo.Collection('categories');
Annotations = new Mongo.Collection('annotations');

Items.initEasySearch('title');

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
  categoryName: {
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
    type: String,
    label: "itemID"
  },
  body: {
    type: String,
    label: "Body",
    optional: true
  },
  author: {
      type: String,
      autoValue:function(){ return this.userId }
  },
  private: {
    type: Boolean,
    label: "Private?",
    optional: true
  }
  }));

Schema = {};
Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
});