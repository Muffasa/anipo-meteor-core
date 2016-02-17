
 interface Master extends Meteor.User {
  name: string
  organization: OrganizationModule.Organization
  masters: Array<Master>
  participants: Array<Participant>
  attendances: Array<Attandance>
  activeAttandance?: Attandance
  creationDate: Date 
}