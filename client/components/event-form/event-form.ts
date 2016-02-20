import {Component, View} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';




import {MeteorComponent} from 'angular2-meteor';


import {RouterLink,RouteParams} from 'angular2/router';

import {Organizations} from 'collections/organizations';
import {Events} from 'collections/events';

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
    eventModel: any = {masters:[],participants:[]} //EventModel
    currentOrg: any // Organization IOrganization

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
     addMasterToEvent(masterData) {
        console.log('EventFormPage -> addMasterToEvent -> masterData: '+ JSON.stringify(masterData));  
            
        this.eventModel.masters.push(masterData)
        debugger
        (<Control>this.eventForm.controls['masters']).updateValue(this.eventModel.masters);
    }
    // TODO: Remove this after prototyping
    get diagnostic() { return JSON.stringify(this.eventModel); }
    
    private mastersAndStudentsContainsUIDM() {
        //TODO chack if masters and students contains organization's UIDM&UVM
        return true
        }
    addEvent(event) {
        
        if (this.eventForm.valid && this.mastersAndStudentsContainsUIDM()) {
            
            //this.call('insertNewEvent',)
            
           
 
            (<Control>this.eventForm.controls['name']).updateValue('');
            (<Control>this.eventForm.controls['UIDM']).updateValue('');
            (<Control>this.eventForm.controls['UVM']).updateValue('');

        }
        else{
            alert('all fields are required')    
        }
    }

}