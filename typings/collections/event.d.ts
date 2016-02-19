
interface Event {
  _id?: string
  name: string
  organization: Organization
  masters: Array<Master>
  participants: Array<Participant>
  attendances: Array<Attandance>
  activeAttandance?: Attandance
  creationDate: Date
}