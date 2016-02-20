

 interface IAdmin extends Meteor.User{
  name: string
<<<<<<< Updated upstream
  organizations: Array<Organization>
=======
  organizations: Array<string> //[id of Organization]
>>>>>>> Stashed changes
}