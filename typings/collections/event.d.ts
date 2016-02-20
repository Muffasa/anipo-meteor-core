
interface IEvent {
  _id?: string
  name: string
  organizationId: string //id of Organization
  mastersId: Array<string> //[id of Meteor.User id that contains ref to Master]
  participantsId: Array<string> //[id of Meteor.User id that contains ref to Participant]
  attendancesId: Array<string> // [id of Attandance]
  activeAttandanceId?: string// id of Attandance

  creationDate: Date
}