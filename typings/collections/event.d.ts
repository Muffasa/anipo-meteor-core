/// <reference path="../meteor/meteor.d.ts" />

interface Event {
  _id?: string
  name: string
  superUsers: Array<SuperUser>
  users: Array<Meteor.User>
  attendances: Array<Attendance>
  
  
  description?: string;
}