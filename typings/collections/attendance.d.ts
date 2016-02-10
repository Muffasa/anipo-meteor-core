/// <reference path="../meteor/meteor.d.ts" />

interface Attandance {
  _id?: string

  event: Event
  superUser: Array<SuperUser>
  date: Date
  polygon: MapPolygon 
  
  participants: Array<User>
  closingAt: Date
  closingTime: Date
  isActive: boolean
  
  additionalData?: any
  description?: string;
}