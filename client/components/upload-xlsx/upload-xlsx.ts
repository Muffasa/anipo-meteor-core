import {Component, View} from 'angular2/core';

import {MeteorComponent} from 'angular2-meteor';

import {Files} from 'collections/files'

@Component({
    selector: 'upload-xlsx'
})
@View({
    templateUrl: '/client/components/upload-xlsx/upload-xlsx.html'
})
export class UploadXLSX extends MeteorComponent {

    constructor() {
        super()
    }

    test(event) {

        let file = event.target.files[0]
        debugger
        console.log("file: " + JSON.stringify(file))
        this.call('getParticipants', file, (error) => {
            if (error) {
                alert(`Failed due to ${error}`);
                return;
            }

            alert('getParticipant resolved withot error');
        })
    }
    parseExcel(event) {
        let file = event.target.files[0]
        Files.insert(file, (err, fileObj) => {
            if (err) {
                console.log("Files.insert error: " + JSON.stringify(err))

            } else {
                console.log("file inserted ")
                this.call('getParticipants', fileObj._id, (error, result) => {
                    if (error) {
                        alert(`Failed due to ${error}`)
                        return;
                    }
                    console.log("result:" + JSON.stringify(result))
                    alert('getParticipant resolved withot error')
                })
            }

        })

    }

}