import {Organizations} from 'collections/organizations';// bug fix to create 
//System.register("server/methods", [], function(exports_1) on generated methods./**
import {Files} from 'collections/files'


Meteor.methods({
    promiseTest: function(delay, doError) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                doError ? reject("my err") : resolve("promiseTest output")
            }, delay)
        })
    },
    test: function(delay, doError) {
        setTimeout(() => {
            if (doError)
                throw new Meteor.Error('500')
            else
                return "test output"
        }, delay)
    },
    uploadFile: function(fileName, fileData) {
        let excelHeaders = getExcelHeadersAsync(fileName, fileData)

        return excelHeaders


    },
    getParticipants: function(fileId) {
        // console.log('entered getParticipants, fileId: ' + fileId)
        // let file = Files.findOne(fileId)
        // console.log('file: ' + JSON.stringify(file))
        // let fileType = file.original.name.split('.')[1]
        // console.log('fileType: ' + fileType)
        // let excel_parser = new Excel(fileType)
        // let workbook = excel_parser.readFile(file.url)

        // let testSheet = workbook.SheetNames



        // let sheet = workbook.Sheets[testSheet[0]]

        // // You can get the sheet as list of lists.
        // //var options = { header : 1 }

        // // Or you  can get an object with column headers as keys.  
        // //var options = { header : ['title', 'fName', 'sName' ,'address' ] }

        // // If options is empty or omitted, it should use the first-row headers by default. 
        // // However this doesn't seem to work with all Excel worksheets. 
        // let options = {}

        // // Generate the JSON like so:

        // let workbookJson = excel_parser.utils.sheet_to_json(sheet, options);
        // return workbookJson
    }
})
//----------------using meteorhacks:async----------------
//tempurarly using meteorhacks:async. reason1: Meteor.warpAsync cause a bug.
// reason2: in the future Promises + async/await will be used.
// function parseExcelToJson(fileName, fileData, options) {
//     return new Promise((resolve, reject) => {
//         try {
//             options = options ? options : {}
//             let fileType = fileName.split('.')[fileName.split('.').length - 1]
//             let excel = new Excel(fileType)
//             let workbook = excel.read(fileData, { type: 'binary' })
//             let sheetNames = workbook.SheetNames
//             let sheet = workbook.Sheets[sheetNames[0]]
//             let workbookJson = excel.utils.sheet_to_json(sheet, options)
//             resolve(workbookJson)
//         }
//         catch (err) {
//             reject(err)
//         }

//     })

// }

function parseExcelToJson(fileName, fileData, options, callback) {
    options = options ? options : {}
    let fileType = fileName.split('.')[fileName.split('.').length - 1]
    let excel = new Excel(fileType)
    let workbook = excel.read(fileData, { type: 'binary' })
    let sheetNames = workbook.SheetNames
    let sheet = workbook.Sheets[sheetNames[0]]
    let workbookJson = excel.utils.sheet_to_json(sheet, options)
    callback(null, workbookJson)
}
var parseExcelToJsonAsync = Async.wrap(parseExcelToJson);

function getExcelHeaders(fileName, fileData, callback) {
    let listParsedFile = parseExcelToJsonAsync(fileName, fileData, { header: 1 })
    let headers = listParsedFile[0]
    callback(null, headers)
}
var getExcelHeadersAsync = Async.wrap(getExcelHeaders);

function validateExcelFile(fileName, fileData, callback) {
    let org = Organizations.findOne(organizationId)
    let excelHeaders = parseExcelToJsonAsync(fileName, fileData)
    let requieredPropsCount = 0
    
    for(let prop of excelHeaders){
        if(prop==org.UIDM||prop==org.UVM)
            requieredPropsCount++
    }
    
    let isValid = requieredPropsCount == 2
    isValid? callback(null,true):callback('The uploaded excel file must contain the organization UIDM and UVM as headers. Please make sure the file hase this headers: ${org.UIDM},${org.UVN}')
}
var getExcelHeadersAsync = Async.wrap(getExcelHeaders);
