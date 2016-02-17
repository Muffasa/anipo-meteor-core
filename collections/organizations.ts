


export var Organizations = new Mongo.Collection('organizations');

Organizations.allow({
  insert: function() {
    var user = Meteor.user();
    return !!user;
  },
  update: function() {
    var user = Meteor.user();
    return !!user;
  },
  remove: function() {
    var user = Meteor.user();
    return !!user;
  }
});

