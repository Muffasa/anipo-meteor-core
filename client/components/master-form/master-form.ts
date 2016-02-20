import {Component, View} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';


@Component({
    selector: 'master-form'
})
@View({
    templateUrl: '/client/components/master-form/master-form.html'
})
export class MasterForm {
    masterForm: ControlGroup
    
    constructor(fb: FormBuilder){
        this.masterForm = fb.group({
            name:['',Validators.require],
            email:['',Validators.require],
            phone:['',Validators.require],
            ID:['',Validators.require]
        })
    }


}