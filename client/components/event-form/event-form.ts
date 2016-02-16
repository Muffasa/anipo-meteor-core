import {Component, View} from 'angular2/core';

import {RouterLink} from 'angular2/router';

import {UploadXLSX} from 'client/components/upload-xlsx/upload-xlsx';


import {MeteorComponent} from 'angular2-meteor';
 
@Component({
    selector: 'event-form'
})
@View({
    templateUrl: '/client/components/event-form/event-form.html',
    directives: [RouterLink,UploadXLSX]
})
export class EventFormPage extends MeteorComponent {
    
    constructor() {super()}

}