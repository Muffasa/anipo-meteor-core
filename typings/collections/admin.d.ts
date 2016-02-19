

 interface Admin extends Meteor.User{
  name: string
  organizations: Array<Organization>
}