import {Component, View} from 'angular2/core';
 
import {Organizations} from 'collections/organizations';
 
import {OrganizationForm} from 'client/pages/dashboard/components/organization-form/organization-form';

import {EventList} from 'client/components/event-list/event-list';

import {RouterLink,RouteParams} from 'angular2/router';

import {MeteorComponent} from 'angular2-meteor';

import {AccountsUI} from 'meteor-accounts-ui';


 
@Component({
    selector: 'organization-events-managment-page'
})
@View({
    templateUrl: '/client/pages/organization-events-managment/organization-events-managment.html',
    directives: [RouterLink,EventList] 
})
export class OrganizationEventsManagmantPage {
    
    organizationId: string
    
    constructor(params: RouteParams ){
        this.organizationId = params.get('organizationId')
    }
  
}