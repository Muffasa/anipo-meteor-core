import {Component, View} from 'angular2/core';
 
import {Organizations} from 'collections/organizations';
 
import {OrganizationForm} from 'client/components/organization-form/organization-form';

import {UploadXLSX} from 'client/components/upload-xlsx/upload-xlsx';

import {RouterLink} from 'angular2/router';

import {MeteorComponent} from 'angular2-meteor';
 
@Component({
    selector: 'home-page'
})
@View({
    templateUrl: '/client/components/home/home.html',
    directives: [RouterLink] 
})
export class HomePage extends MeteorComponent{
    
    organization_id: string
    organization: any
    
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