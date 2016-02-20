

 interface IAdmin extends Meteor.User{
  name: string
  organizations: Array<string> //[id of Organization]

}