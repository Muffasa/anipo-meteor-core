import {Component, View, Input} from 'angular2/core';
 
import {RouterLink,RouteParams} from 'angular2/router';

import {RequireUser, InjectUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

import {Events} from 'collections/events';
 
import {OrganizationForm} from 'client/pages/dashboard/components/organization-form/organization-form';

@Component({
    selector: 'event-list'
})

@View({
    templateUrl: '/client/components/event-list/event-list.html'
})
@InjectUser()
export class EventList extends MeteorComponent {
    

    events: Mongo.Cursor<any>;
 
    constructor(params: RouteParams) {
        super();
        let organizationId = params.get('organizationId');
            this.subscribe('organizationEvents',organizationId, () => {
                this.autorun(() => {
                    this.events = Events.find({});
            })
        },true)
        
    }
 
    removeEvent(organization) {
        Events.remove(organization._id);
    }
    search(value) {
        if (value) {
            this.events = Events.find({ name: value });
        } else {
            this.events = Events.find();
            
        }
    }
}