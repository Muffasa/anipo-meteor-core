

 interface IAdmin extends Meteor.User{
  name: string
  organizationsId: Array<string> //[id of Organization]

}