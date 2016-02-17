interface Participant extends Meteor.User {
  UIDM: OrganizationModule.UIDM
  name: string
  organization: OrganizationModule.Organization
  events: Array<Event>
  attendances: Array<Attandance>
  credits: Array<Credit>
}