import {Component, View} from 'angular2/core';
 
import {Organizations} from 'collections/organizations';

import {RouterLink,RouteParams} from 'angular2/router';

import {RequireUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';
 
@Component({
    selector: 'organization-details'
})
@View({
    templateUrl: '/client/components/organization-details/organization-details.html',
    directives: [RouterLink] 
})
export class OrganizationDetails extends MeteorComponent{
    
    organization_id: string
    organization: any
    
        constructor(public params: RouteParams) {
            super();
            var organizationId = params.get('organizationId');
         this.subscribe('organization', organizationId, () => {
            this.organization = Organizations.findOne(organizationId);
        }, true);

    }
}