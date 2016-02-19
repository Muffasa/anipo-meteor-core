import {Component, View, Input} from 'angular2/core';
 
import {Organizations} from 'collections/organizations';

import {RouterLink,RouteParams} from 'angular2/router';

import {RequireUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';
 
@Component({
    selector: 'organization-details'
})
@View({
    templateUrl: '/client/pages/dashboard/components/organization-details/organization-details.html',
    directives: [RouterLink]//,EventList] 
})
export class OrganizationDetails extends MeteorComponent{
    
    organization: any = {}
    
        constructor(params: RouteParams) {
        super();
        let organizationId = params.get('organizationId');
        this.subscribe('organization', organizationId, () => {
            this.autorun(() => {
                this.organization = Organizations.findOne(organizationId);
            });
        }, true);

    }

}