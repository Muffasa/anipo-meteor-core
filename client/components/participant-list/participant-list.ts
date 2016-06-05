import {Component, View, Input} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {MeteorComponent} from 'angular2-meteor';

import {IParticipant} from 'anipo-core-entities'

import {Participants} from 'collections/participants'

@Component({
    selector: 'participant-list'
})
@View({
    templateUrl: '/client/components/participant-list/participant-list.html'
})
export class ParticipantList extends MeteorComponent {

    @Input() eventId: string
    @Input() organizationId: string
    @Input() participants: Array<IParticipant>
    

    constructor() {//TODO editable
        super()
        if (this.eventId) {
            this.subscribe('eventParticipants', this.eventId, () => {
                this.autorun(() => {
                    this.participants = Participants.find({ eventsId: this.eventId })
                })
            })
        }
        else if (this.organizationId) {
            this.subscribe('organizationParticipants', this.organizationId, () => {
                this.autorun(() => {
                    this.participants = Participants.find({ organizationId: this.organizationId })
                })
            })
        }
    }


}