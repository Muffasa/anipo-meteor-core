
interface IAttandance {
  _id?: string
  masterId: string//id of Meteor.User id that contains ref to Master
  eventId: string//id of Event
  participants: Array<string>//[id of Meteor.User that contains ref to Participant]
  location: {
    lat: number
    lng: number
  }
  radius?: number
  isActive: boolean
  closedDate: Date
  upTime: number
  
  creationDate: Date
  
}