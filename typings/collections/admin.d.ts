
/// <reference path="../meteor/meteor.d.ts" />

 interface Admin extends Meteor.User{
  name: string
  organizations: Array<OrganizationModule.Organization>
}