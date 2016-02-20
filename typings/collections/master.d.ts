
 interface IMaster {
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
<<<<<<< Updated upstream
  organization: Organization
  masters: Array<Master>
  participants: Array<Participant>
  attendances: Array<Attandance>
  activeAttandance?: Attandance
=======
  organizationId: string //id of Organization
  eventsId: Array<string> //[id of Event]
  attendancesId: Array<string>//[id of Attendance]
  activitionCode: string
>>>>>>> Stashed changes
  creationDate: Date 
}