import {bootstrap ,MeteorComponent} from 'angular2-meteor';
import {Component, View, NgZone, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
 
import {Populator} from 'client/services/populator'
 
import {HomePage} from 'client/pages/home/home';
import {DashboardPage} from 'client/pages/dashboard/dashboard';
import {OrganizationDetails} from 'client/pages/dashboard/components/organization-details/organization-details';
import {EventDetails} from 'client/components/event-details/event-details';
import {EventFormPage} from 'client/components/event-form/event-form';
import {OrganizationEventsManagmantPage} from 'client/pages/organization-events-managment/organization-events-managment';

 
@Component({
    selector: 'app'
})
@View({
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'HomePage', component: HomePage },
    { path: '/DashboardPage', as: 'DashboardPage', component: DashboardPage },
    { path: '/OrganizationUsersManagmantPage/:organizationId', as: 'OrganizationUsersManagmantPage', component: DashboardPage },
    { path: '/OrganizationEventsManagmantPage/:organizationId', as: 'OrganizationEventsManagmantPage', component: OrganizationEventsManagmantPage },
    { path: '/OrganizationEventsManagmantPage/EventFormPage/:organizationId', as: 'EventFormPage', component: EventFormPage },
    { path: '/organization/:organizationId', as: 'OrganizationDetails', component: OrganizationDetails },
    { path: '/event/:eventId', as: 'EventDetails', component: DashboardPage }
])
class Socially {}
 
bootstrap(Socially, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' }),Populator]);