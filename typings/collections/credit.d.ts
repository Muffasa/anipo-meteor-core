
 interface Credit {
  _id?: string
  participant: Participant
  attandance: Attandance
  creationDate: Date
  location?:{
      lat: number
      lng: number
  }
  blueToothConfirm: boolean
}