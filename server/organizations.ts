import {Organizations} from 'collections/organizations';
 
function buildQuery(organizationId?: string): Object {
    var isAvailable = {
                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
    };
 
    if (organizationId) {
        return { $and: [{ _id: organizationId }, isAvailable] };
    }
 
    return isAvailable;
}
 
// Meteor.publish('organizations', function(options) {
//     return Organizations.find(buildQuery.call(this), options);
// });
Meteor.publish('organizations', function() {
    return Organizations.find({})
});
 
Meteor.publish('organization', function(organizationId) {
    return Organizations.find(buildQuery.call(this, organizationId));
    // return Organizations.find({_id:organizationId})
});