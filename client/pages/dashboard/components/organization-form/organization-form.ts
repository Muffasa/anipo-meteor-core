import {Component, View} from 'angular2/core';
 
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
 
import {Organizations} from 'collections/organizations';

import {TestClass,UIDM} from 'anipo-core-entities';

import {RequireUser, InjectUser} from 'meteor-accounts';

 
@Component({
    selector: 'organization-form'
})
@View({
    templateUrl: '/client/pages/dashboard/components/organization-form/organization-form.html'
})
@InjectUser()
export class OrganizationForm {
    organizationForm: ControlGroup; 
    uidms: Array<string>
    uvms: Array<string>
    constructor() {
        
        
        //manually inserted untill figerout how to import and work with enums
        this.uidms = ["Email","Phone number","ID number","custom"]
        this.uvms = ["Email","Phone number","Facebook","Gmail","Twitter"]

        var fb = new FormBuilder();
        this.organizationForm = fb.group({
            name: ['', Validators.required],
            UIDM: ['Email', Validators.required],
            UVM: ['Phone number', Validators.required]
            
        });
    }
 
    addOrganization(organization) {
        
        if (this.organizationForm.valid) {
            Organizations.insert({
                name: organization.name,
                owner: this.user._id,
                UIDM: organization.UIDM//.toLowerCase().split(' ')[0],
                UVM: organization.UVM//.toLowerCase().split(' ')[0]   
            },(err , result) => {
                console.log("err: " + err)});
 
            (<Control>this.organizationForm.controls['name']).updateValue('');
            (<Control>this.organizationForm.controls['UIDM']).updateValue('');
            (<Control>this.organizationForm.controls['UVM']).updateValue('');

        }
        else{
            alert('all fields are required')    
        }
    }
}