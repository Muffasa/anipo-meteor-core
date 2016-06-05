import {Organizations} from 'collections/organizations';
import {Events} from 'collections/events';
 
function buildQuery(organizationId?: string): Object {
    debugger
    var isAvailable = {
                $or: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
    };
 
    if (organizationId) {
        return { $and: [{ _id: organizationId }, isAvailable] };
    }
 
    return isAvailable;
}
 

Meteor.publish('event', function(eventId) {
    return Events.find(buildQuery.call(this, eventId));
});
 
// Meteor.publish('organizationEvents', function(organizationId) {
//     return Events.find(buildQuery.call(this, organizationId));
// });

Meteor.publish('organizationEvents', function(organizationId) {
    
    let organization = Organizations.findOne(organizationId)
    
    if(!organization)
        throw new Meteor.Error('404', 'organization dose not exist')
    
    // if(!userPremited())
    //     throw new Meteor.Error('403', 'no premissions')
           
    
    
    return Events.find({organization: organizationId});
});



