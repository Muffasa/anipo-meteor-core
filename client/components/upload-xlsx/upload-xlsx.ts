import {Component, View, Output, EventEmitter} from 'angular2/core';

import {MeteorComponent} from 'angular2-meteor';

import {Files} from 'collections/files'

import {CurrentOrganization} from 'client/services/current-organization'
@Component({
    selector: 'upload-xlsx'
})
@View({
    templateUrl: '/client/components/upload-xlsx/upload-xlsx.html'
})
export class UploadXLSX extends MeteorComponent {
    @Output() jsonReady = new EventEmitter()

    constructor(public org:CurrentOrganization) {
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
    uploadExcelFile(event) {
        let file = event.target.files[0]
        let currentOrg = this.org.get()
        console.log(`currentOrg: ${currentOrg}`);
        

        var reader = new FileReader();
        reader.onload = (fileLoadEvent) => {
            this.call('excelFileValidation', event.target.value, reader.result ,currentOrg, function(error, result) {
                console.log('excelFileValidation resolved')
                if(error){
                    alert(error)
                }    
                else{
                    this.jsonReady.emit(result)
                }
            });
        };
        reader.readAsBinaryString(file);
    }

}