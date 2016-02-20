
/// <reference path="../meteor/meteor.d.ts" />

/// <reference path="organization.d.ts" />    
/// <reference path="event.d.ts" />   
/// <reference path="attendance.d.ts" />   
/// <reference path="admin.d.ts" />   
/// <reference path="master.d.ts" />   
/// <reference path="organization.d.ts" />   
/// <reference path="admin.d.ts" />   
/// <reference path="master.d.ts" />  
/// <reference path="participant.d.ts" />  
/// <reference path="event.d.ts" />  
/// <reference path="attendance.d.ts" />   
/// <reference path="credit.d.ts" />  


declare namespace anipoCoreEntitiesModule {

    //User identifcation method
    export enum UIDM {
        Email,
        Phone,
        ID,
        Finger
    }
    //User varification method
    export enum UVM {
        Email,
        Phone,
        Facebook,
        Gmail,
        Twitter
    }
    export interface IOrganization {
        _id?: string
        name: string
        owner: string //Meteor.User _id
        UIDM: UIDM
        UVM: UVM
        eventsId: Array<string>//[id of Event]
        permittedUsersId: Array<string>//[UIDM of premitted user] 
        mastersId: Array<string>//[id of Master]
        participantsId: Array<string>//[id of Participant]

        creationDate: Date
    }
    export interface IEvent {
        _id?: string
        name: string
        organizationId: string //id of Organization
        mastersId: Array<string> //[id of Meteor.User id that contains ref to Master]
        participantsId: Array<string> //[id of Meteor.User id that contains ref to Participant]
        attendancesId: Array<string> // [id of Attandance]
        activeAttandanceId?: string// id of Attandance

        creationDate: Date
    }
    export interface IAttandance {
        _id?: string
        masterId: string//id of Meteor.User id that contains ref to Master
        eventId: string//id of Event
        participantsId: Array<string>//[id of Meteor.User that contains ref to Participant]
        location: {
            lat: number
            lng: number
        }
        radius?: number
        isActive: boolean
        closedDate: Date
        upTime: number

        creationDate: Date
    }

    export interface ICredit {
        _id?: string
        participantId: string//id of Meteor.User that contains ref to Participant
        attandanceId: string//id of Attandance
        creationDate: Date
        location?: {
            lat: number
            lng: number
        }
        blueToothConfirm: boolean
    }


    export interface IAdmin extends Meteor.User {
        name: string
        organizationsId: Array<string> //[id of Organization]

    }
    export interface IMaster {
        _id?: string
        UIDM: UIDM
        email: string
        phone: {
            number: string
            country: {
                code: string
                prefix: string
            }
        }
        name: string
        organizationId: string //id of Organization
        eventsId?: Array<string> //[id of Event]
        attendancesId?: Array<string>//[id of Attendance]
        activitionCode?: string

        creationDate: Date
    }
    export interface IParticipant {
        _id?: string
        UIDM: UIDM
        email: string
        phone: {
            number: string
            country: {
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
}

declare module 'anipo-core-entities' {
    export = anipoCoreEntitiesModule
}   