import {Component, View, Output, EventEmitter} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {IMaster} from 'anipo-core-entities'

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
    @Output() validMasterSubmited = new EventEmitter()

    constructor(fb: FormBuilder) {
        this.masterForm = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.Email])],
            phone: ['', Validators.required],
            ID: ['', Validators.required]
        })
    }
    addMasterToEventForm(master) {

        if (this.masterForm.valid) {
            debugger
            this.validMasterSubmited.emit(master)

            (<Control>this.masterForm.controls['name']).updateValue('');
            (<Control>this.masterForm.controls['email']).updateValue('');
            (<Control>this.masterForm.controls['phone']).updateValue('');
            (<Control>this.masterForm.controls['ID']).updateValue('');
        }
        else {//TODO validation errors, requiered determend by UIDM&UVM
            alert('all fields are required')
        }
    }


}