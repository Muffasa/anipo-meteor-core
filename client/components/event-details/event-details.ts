import {Component, View, Input} from 'angular2/core';



import {RouterLink,RouteParams} from 'angular2/router';

import {RequireUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

import {Events} from 'collections/events';
 
@Component({
    selector: 'event-details'
})
@View({
    templateUrl: '/client/components/event-details/event-details.html',
    directives: [RouterLink] 
})
export class EventDetails extends MeteorComponent{
    
    event: any = {}
    
        constructor(params: RouteParams) {
        super();
        let eventId = params.get('eventId');
        this.subscribe('event', eventId, () => {
            this.autorun(() => {
                this.event = Events.findOne(eventId);
            });
        }, true);

    }

}