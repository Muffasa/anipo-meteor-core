import {Organizations} from 'collections/organizations';// bug fix to create 
//System.register("server/methods", [], function(exports_1) on generated methods./**

Meteor.methods({
    populate_ownerId: function(ownerId) {
        
        console.log('entered populate_ownerId');
        console.log(`ownerId: ${ownerId}`);
        
        let result = Meteor.users.findOne({_id:ownerId})
       console.log(`result: ${JSON.stringify(result)}`)
        
        return result
    }
})
