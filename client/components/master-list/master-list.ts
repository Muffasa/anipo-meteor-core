import {Component, View, Input} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {MeteorComponent} from 'angular2-meteor';

import {IMaster} from 'anipo-core-entities'

import {Masters} from 'collections/masters'

@Component({
    selector: 'master-list'
})
@View({
    templateUrl: '/client/components/master-list/master-list.html'
})
export class MasterList extends MeteorComponent {

    @Input() eventId: string
    @Input() organizationId: string
    @Input() masters: Array<IMaster>
    

    constructor() {//TODO editable
        super()
        if (this.eventId) {
            this.subscribe('eventMasters', this.eventId, () => {
                this.autorun(() => {
                    this.masters = Masters.find({ eventsId: this.eventId })
                })
            })
        }
        else if (this.organizationId) {
            this.subscribe('organizationMasters', this.organizationId, () => {
                this.autorun(() => {
                    this.masters = Masters.find({ organizationId: this.organizationId })
                })
            })
        }
    }


}