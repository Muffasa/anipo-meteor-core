/**a service that holdes the current active organization */
import {Injectable} from 'angular2/core'

import {Organizations} from 'collections/organizations';

import {MeteorComponent} from 'angular2-meteor'

@Injectable()
export class CurrentOrganization  {
    activeOrganization: any
    constructor() { }
    
   set(organization){this.activeOrganization=organization}
   get(){return this.activeOrganization} 

}//TODO work with singeltone and get 'global' service that canges its content (organization)
//only on recreation