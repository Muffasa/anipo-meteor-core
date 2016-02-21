


export var Organizations = new Mongo.Collection('organizations')
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





//-------transform cause server bug, the puplish function dosent return a mongo crusor
// export var Organizations = new Mongo.Collection('organizations', {
//     transform: function(doc) {
//         doc.related = Related;
//         doc.relations = new Relations("ownerId");
//         return doc;
//     }
// });
// //------relations definitions-------
// // the function to call to get related data
// var Related = function(value) {
//     // is relation stored on this object or on destination object?
//     var related = this[value] || null;
//     if (!related) {
//         return this.relations[value](this._id);
//     } else {
//         return this.relations[value](related);
//     }
// };

// var Relations = function(relationKey) {
//     this.relationKey = relationKey;
// };

// // shared prototype
// // Relations.prototype.ownerId = function(id) {
// //     var selector = {};
// //     selector[this.relationKey] = id;
// //     return Meteor.users.find(selector);
// // };

// Relations.prototype.ownerId = function (id) {
//   return Meteor.users.findOne({_id: id});
// };

