
interface IParticipant {
  _id?: string
  UIDM: string
  email: string
  phone: {
      number: string
      country:{
          code: string
          prefix: string
          }
    } 
  name: string
  organizationId: string //id of Organization
  eventsId: Array<string> //[id of Event]
  attendancesId: Array<string>//[id of Attendance]
  creditsId: Array<string>//[id of Credit]

}