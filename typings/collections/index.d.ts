
/// <reference path="../meteor/meteor.d.ts" />

/// <reference path="organization.d.ts" />    
/// <reference path="event.d.ts" />   
/// <reference path="attendance.d.ts" />   
/// <reference path="admin.d.ts" />   
/// <reference path="master.d.ts" />   
/// <reference path="participant.d.ts" />   
/// <reference path="credit.d.ts" />  

declare namespace enumsModule {

    //User identifcation method
    enum UIDM {
        Email,
        Phone,
        ID,
        Finger
    }
    //User varification method
    enum UVM {
        Email,
        Phone,
        Facebook,
        Gmail,
        Twitter
        }        
     class TestClass {}    
  
}

declare module 'anipo-core-entities'{
     export = enumsModule   
    }   