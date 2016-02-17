

export var Files = new FS.Collection("files", {stores: [ new FS.Store.GridFS("files")]});

Files.allow({
  insert: function() {
    return true
  },
  update: function() {
    return true
  },
  remove: function() {
      return true
  }
});