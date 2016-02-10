import {Component, View} from 'angular2/core';
 
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
 
import {Organizations} from 'collections/organizations';
 
@Component({
    selector: 'organization-form'
})
@View({
    templateUrl: '/client/components/organization-form/organization-form.html'
})
export class OrganizationForm {
    organizationForm: ControlGroup;
 
    constructor() {
        var fb = new FormBuilder();
        this.organizationForm = fb.group({
            name: ['', Validators.required],
            country: [''],
            UIDM: [''],
            eventsTypes: [''],
            admins: ['']
            
        });
    }
 
    addOrganization(organization) {
        
        //for univercity prototyping
        // organization.country = organization.country.isEmpty ? 'Israel' : organization.country
        // organization.UIDM = organization.UIDM.isEmpty ? 'email-phone' : organization.UIDM
        // organization.eventsTypes = organization.eventsTypes.isEmpty ? 'Course' : organization.eventsTypes
       // organization.admins = organization.admins.isEmpty ? 'Israel' : organization.admins
        
        
        if (this.organizationForm.valid) {
            Organizations.insert({
                name: organization.name,
                country: organization.country,
                UIDM: organization.UIDM,
                eventsTypes: organization.eventsTypes,
                admins: organization.admins    
            },(err , result) => {
                debugger
                console.log("err: " + err)});
 
            (<Control>this.organizationForm.controls['name']).updateValue('');
            (<Control>this.organizationForm.controls['country']).updateValue('');
            (<Control>this.organizationForm.controls['UIDM']).updateValue('');
            (<Control>this.organizationForm.controls['eventsTypes']).updateValue('');
            (<Control>this.organizationForm.controls['admins']).updateValue('');
        }
    }
}