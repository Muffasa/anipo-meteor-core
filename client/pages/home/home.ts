import {Component, View} from 'angular2/core';
 
import {Organizations} from 'collections/organizations';
 
import {OrganizationForm} from 'client/pages/dashboard/components/organization-form/organization-form';

import {UploadXLSX} from 'client/components/upload-xlsx/upload-xlsx';

import {RouterLink} from 'angular2/router';

import {MeteorComponent} from 'angular2-meteor';

import {AccountsUI} from 'meteor-accounts-ui';

import {IOrganization} from 'anipo-core-entities'

 
@Component({
    selector: 'home-page'
})
@View({
    templateUrl: '/client/pages/home/home.html',
    directives: [RouterLink,AccountsUI,UploadXLSX] 
})
export class HomePage extends MeteorComponent{
    
    organization_id: string
    organization: IOrganization
    
        constructor() {
            super();
         }
    test(){
       // debugger
       //var excel = new Excel('xls');
       //this.call('testm','lolzi!')
       this.call('excelTest')  
    }     
}