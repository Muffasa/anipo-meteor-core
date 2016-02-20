
        

  interface IOrganization {
    _id?: string
    name: string
    owner: string //Meteor.User _id
    UIDM: UIDM
    UVM: UVM
    eventsId: Array<string>//[id of Event]
    permittedUsersId: Array<string>//[UIDM of premitted user] 
    mastersId: Array<string>//[id of Master]
    participantsId: Array<string>//[id of Participant]

    creationDate: Date
}    



