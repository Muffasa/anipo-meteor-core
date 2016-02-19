
interface Participant extends Meteor.User {
  UIDM: string
  name: string
  organization: Organization
  events: Array<Event>
  attendances: Array<Attandance>
  credits: Array<Credit>
}