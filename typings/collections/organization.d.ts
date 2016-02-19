
        
interface Organization {
    _id?: string
    name: string
    owner: Admin
    UIDM: UIDM
    UVM: UVM
    events: Array<Event>
    permittedUsers: Array<Meteor.User> 
    masters: Array<Master>
    participants: Array<Participant>

    creationDate: Date
}    



