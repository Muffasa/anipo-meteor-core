import {Component, View} from 'angular2/core';
 
import {RouterLink} from 'angular2/router';

import {RequireUser, InjectUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

import {Organizations} from 'collections/organizations';
 
import {OrganizationForm} from 'client/pages/dashboard/components/organization-form/organization-form';

@Component({
    selector: 'organization-list'
})

@View({
    templateUrl: '/client/pages/dashboard/components/organization-list/organization-list.html',
    directives: [OrganizationForm, RouterLink]
})
@InjectUser()
export class OrganizationList extends MeteorComponent {
    organizations: Mongo.Cursor<any>;
 
    constructor() {
        super();
            console.log("this.user: "+this.user);
            this.subscribe('organizations', () => {
                this.autorun(() => {
                    this.organizations = Organizations.find({});
            })
        })
        
    }
 
    removeOrganization(organization) {
        Organizations.remove(organization._id);
    }
    search(value) {
        if (value) {
            this.organizations = Organizations.find({ name: value });
        } else {
            this.organizations = Organizations.find();
            
        }
    }
}