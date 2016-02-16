import {Component, View, NgZone, provide} from 'angular2/core';
 
import {bootstrap ,MeteorComponent} from 'angular2-meteor';
 
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
 
import {OrganizationList} from 'client/components/organization-list/organization-list';
 
import {OrganizationDetails} from 'client/components/organization-details/organization-details';

import {EventFormPage} from 'client/components/event-form/event-form';
 
import {HomePage} from 'client/components/home/home';


 
@Component({
    selector: 'app'
})
@View({
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'HomePage', component: HomePage },
    { path: '/EventFormPage', as: 'EventFormPage', component: EventFormPage },
    { path: '/Organiztions', as: 'Organizations', component: OrganizationList },
    { path: '/organization/:organizationId', as: 'OrganizationDetails', component: OrganizationDetails }
])
class Socially {}
 
bootstrap(Socially, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);