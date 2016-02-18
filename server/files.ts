import {Files} from 'collections/files';

Meteor.publish('files', function() {
    return Files.find({})
});
 
Meteor.publish('file', function(fileId) {
    return Files.find({_id:fileId})
});



