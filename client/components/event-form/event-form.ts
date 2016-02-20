import {Component, View} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';




import {MeteorComponent} from 'angular2-meteor';


import {RouterLink,RouteParams} from 'angular2/router';

import {Organizations} from 'collections/organizations';

import {UploadXLSX} from 'client/components/upload-xlsx/upload-xlsx';
import {MasterForm} from 'client/components/master-form/master-form';
import {MasterList} from 'client/components/master-list/master-list';
import {ParticipantForm} from 'client/components/participant-form/participant-form';

@Component({
    selector: 'event-form'
})
@View({
    templateUrl: '/client/components/event-form/event-form.html',
    directives: [RouterLink, UploadXLSX,MasterForm,MasterList,ParticipantForm]
})
export class EventFormPage extends MeteorComponent {

    eventForm: ControlGroup; 
    currentOrg: any // Organization Iorganization

    constructor(params: RouteParams) {
        super()
        
        
        var fb = new FormBuilder();
        this.eventForm = fb.group({
            name: ['', Validators.required],
            organization: ['d', Validators.required],
            masters: ['', Validators.required],
            participants: ['', Validators.required]
            
        });
        
        
        let organizationId = params.get('organizationId') 
        this.subscribe('organization',organizationId,()=>{
            this.currentOrg = Organizations.findOne(organizationId)
            console.log('this.currentOrg.name: '+this.currentOrg.name);
            

                (<Control>this.eventForm.controls['organization']).updateValue(this.currentOrg.name);
        })


    }
 
    addEvent(event) {
        
        if (this.eventForm.valid) {
            Events.insert({
                name: event.name,
                organization: event.organization,
                masters: event.masters,
                prticipants: event.prticipants 
            },(err , result) => {
                console.log("err: " + err)});
 
            (<Control>this.eventForm.controls['name']).updateValue('');
            (<Control>this.eventForm.controls['UIDM']).updateValue('');
            (<Control>this.eventForm.controls['UVM']).updateValue('');

        }
        else{
            alert('all fields are required')    
        }
    }

}