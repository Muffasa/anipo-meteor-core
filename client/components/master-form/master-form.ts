import {Component, View} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {IOrganization} from 'anipo-core-entities'

import {Masters} from 'collections/masters';

@Component({
    selector: 'master-form'
})
@View({
    templateUrl: '/client/components/master-form/master-form.html'
})
export class MasterForm {
    masterForm: ControlGroup
    org: IOrganization
    
    constructor(fb: FormBuilder){
        this.masterForm = fb.group({
            name:['',Validators.required],
            email:['',Validators.required],
            phone:['',Validators.required],
            ID:['',Validators.required]
        })
    }
    addMasterToEventForm(master) {
        
        if (this.masterForm.valid) {
            Masters.insert({
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