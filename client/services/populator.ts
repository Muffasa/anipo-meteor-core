
/**idea: a Populator service that recives a raw object that
 * contains only refs to its related documents, and a field to populate.
 * 
*/

import {Injectable} from 'angular2/core'

import {MeteorComponent} from 'angular2-meteor'
@Injectable()
export class Populator extends MeteorComponent {
    constructor() { super() }
    populate(rawObj, field) {
        return new Promise((resolve, reject) => {
            if (!rawObj[field])
                reject('the field ${field} dose not exsit in the object')

            check(rawObj[field], String || [String])

            let result = rawObj
            if (rawObj[field].lenght) {

            }
            else {
                this.call(`populate_${field}`, rawObj[field], (err,data) => {
                    console.log(`populate_${field} data: ${data}, err: ${err}`);
                    result[field.replace('Id','')]=data
                    resolve(result)

                })
            }
        })

    }
    bind() { }

}