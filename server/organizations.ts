import {Organizations} from 'collections/organizations';

function buildQuery(organizationId?: string): Object {
    var isAvailable = {
        $and: [
            { ownerId: this.userId },
            { ownerId: { $exists: true } }
        ]
    };

    if (organizationId) {
        return { $and: [{ _id: organizationId }, isAvailable] };
    }

    return isAvailable;
}


Meteor.publish('organizations', function() {
    return Organizations.find({})
});
 
Meteor.publish('organization', function(organizationId) {
    return Organizations.find(buildQuery.call(this, organizationId));
    //return Organizations.findOne({_id:organizationId})
});




