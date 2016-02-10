import {Component, View, NgZone, provide} from 'angular2/core';
 
import {bootstrap ,MeteorComponent} from 'angular2-meteor';
 
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
 
import {OrganizationList} from 'client/components/organization-list/organization-list';
 
import {OrganizationDetails} from 'client/components/organization-details/organization-details';


 
@Component({
    selector: 'app'
})
@View({
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'OrganizationList', component: OrganizationList },
    { path: '/organization/:organizationId', as: 'OrganizationDetails', component: OrganizationDetails }
])
class Socially {}
 
bootstrap(Socially, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);