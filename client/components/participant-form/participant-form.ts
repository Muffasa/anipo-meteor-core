import {Component, View, Output, EventEmitter} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'participant-form'
})
@View({
    templateUrl: '/client/components/participant-form/participant-form.html'
})
export class ParticipantForm extends MeteorComponent {

    participantForm: ControlGroup
    org: IOrganization //@Input() Org for global current organization, determin UIDM
    @Output() validParticipantSubmited = new EventEmitter()
    @Output() validExcelSubmited = new EventEmitter()

    constructor(fb: FormBuilder) {
        super()
        this.participantForm = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.Email])],
            phone: ['', Validators.required],
            ID: ['', Validators.required]
        })
    }
    getParticipantsFromExcel(){
       // this.call('getParticipantsFromExcel',)
    }
    addParticipantToEventForm(participant) {

        if (this.participantForm.valid) {
            
            this.validParticipantSubmited.emit(participant)

            (<Control>this.participantForm.controls['name']).updateValue('');
            (<Control>this.participantForm.controls['email']).updateValue('');
            (<Control>this.participantForm.controls['phone']).updateValue('');
            (<Control>this.participantForm.controls['ID']).updateValue('');
        }
        else {//TODO validation errors, requiered determend by UIDM&UVM
            alert('all fields are required')
        }
    }
}