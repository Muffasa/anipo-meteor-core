
 interface Credit {
  _id?: string
  participantId: string//id of Meteor.User that contains ref to Participant
  attandanceId: string//id of Attandance
  creationDate: Date
  location?:{
      lat: number
      lng: number
  }
  blueToothConfirm: boolean
}