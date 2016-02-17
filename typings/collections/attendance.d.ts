
interface Attandance {
  _id?: string
  creator: Master
  event: Event
  participants: Array<Participant>
  creationDate: Date
  location: {
    lat: number
    lng: number
  }
  radius: number
  isActive: boolean
  closedDate: Date
  upTime: number
  
}