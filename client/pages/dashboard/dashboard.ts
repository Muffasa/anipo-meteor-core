import {Component, View} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {RequireUser, InjectUser} from 'meteor-accounts';
import {MeteorComponent} from 'angular2-meteor';

import {Organizations} from 'collections/organizations';
import {OrganizationList} from 'client/pages/dashboard/components/organization-list/organization-list'
import {OrganizationForm} from 'client/pages/dashboard/components/organization-form/organization-form'

@Component({
    selector: 'dashboard'
})

@View({
    templateUrl: '/client/pages/dashboard/dashboard.html',
    directives: [ RouterLink,OrganizationList,OrganizationForm]
})
@InjectUser()
//@RequireUser()
export class DashboardPage {
    
    constructor(){
    console.log('this.user: '+this.user);
        
    }

}