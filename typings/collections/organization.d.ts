declare module OrganizationModule {

    //User identifcation method
    export enum UIDM {
        Email,
        Phone,
        ID,
        Finger
    }
    //User varification method
    export enum UVM {
        Email,
        Phone,
        Facebook,
        Gmail,
        Twitter
        }
        
    export interface Organization {
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
}


