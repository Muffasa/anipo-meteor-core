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
        debugger
       let a2z_excel = Meteor.npmRequire('a2z-excel')
       let xlsx = new  a2z_excel.Excel('xlsx')
       console.log(JSON.stringify(xlsx))
    }     
}