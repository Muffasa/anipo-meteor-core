import {Organizations} from 'collections/organizations';
 
export function loadOrganizations() {
    if (Organizations.find().count() === 0) {
 
    var organizations = [
        {
            'name': 'Tel-Aviv Univercity',
            'country': 'Israel',
            'UIDM': 'email:phone',
            'eventsTypse': ['course'],
            'admins':['lol@1','lol@2']
        },
        {
            'name': 'Omarim Elementery School',
            'country': 'Israel',
            'UIDM': 'email:email',
            'eventsTypse': ['trip','class','exame'],
            'admins':['lol@11','lol@22']
        },
        {
            'name': 'org-3',
            'country': 'Israel',
            'UIDM': 'ID:phone',
            'eventsTypse': ['course'],
            'admins':['lol@111','lol@222']
        }
    ];
 
    for (var i = 0; i < organizations.length; i++) {
        Organizations.insert(organizations[i]);
    }
  }
};