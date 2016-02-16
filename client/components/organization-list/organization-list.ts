import {Component, View} from 'angular2/core';
 
import {Organizations} from 'collections/organizations';
 
import {OrganizationForm} from 'client/components/organization-form/organization-form';

import {UploadXLSX} from 'client/components/upload-xlsx/upload-xlsx';

import {RouterLink} from 'angular2/router';
 
import {AccountsUI} from 'meteor-accounts-ui';

import {MeteorComponent} from 'angular2-meteor';
 
@Component({
    selector: 'organization-list'
})
@View({
    templateUrl: '/client/components/organization-list/organization-list.html',
    directives: [OrganizationForm, RouterLink, AccountsUI,UploadXLSX]
})
export class OrganizationList extends MeteorComponent {
    organizations: Mongo.Cursor<any>;
 
    constructor() {
        super();
        this.autorun(() => {
            this.subscribe('organizations', () => {
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