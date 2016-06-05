import {Component, View} from 'angular2/core';

import {Organizations} from 'collections/organizations';

import {OrganizationForm} from 'client/pages/dashboard/components/organization-form/organization-form';

import {RouterLink} from 'angular2/router';

import {MeteorComponent} from 'angular2-meteor';

import {AccountsUI} from 'meteor-accounts-ui';

import {IOrganization} from 'anipo-core-entities'


@Component({
    selector: 'home-page'
})
@View({
    templateUrl: '/client/pages/home/home.html',
    directives: [RouterLink, AccountsUI]
})
export class HomePage extends MeteorComponent {

    organization_id: string
    organization: IOrganization

    constructor() {
        super();
    }
    test1() {
        this.call('promiseTest', 1000, true, (a, b) => {
            console.log('a:' + a);
            console.log('b:' + b);
        })
    }
    test2() {
        this.call('test', 1000, false, (a, b) => {
            console.log('a:' + a);
            console.log('b:' + b);
        })
    }
}