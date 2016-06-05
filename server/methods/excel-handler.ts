import {Organizations} from 'collections/organizations';// bug fix to create 
//System.register("server/methods", [], function(exports_1) on generated methods./**
import {Files} from 'collections/files'


Meteor.methods({
    excelFileValidation: function(fileName, fileData, organization) {
        try {
            console.log(`organization: ${organization}`)
            

            return getDataFromExcelFileAsync(fileName, fileData, organization)
        }
        catch (ex) {

            console.log(`ex: ${ex}`);

            throw new Meteor.Error('500', ex.message)
        }
    },
    uploadFile: function(fileName, fileData) {
        try {
            let excelHeaders = getExcelHeadersAsync(fileName, fileData)
            return excelHeaders
        }
        catch (ex) {

            console.log(`ex: ${ex}`);

            throw new Meteor.Error('500', ex.message)
        }


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
    if (fileType != 'xls' && fileType != 'xlsx')
        throw Meteor.Error('403', 'please select and excel file only (xls or xlsx)')
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

function validateExcelFile(fileName, fileData, organization, callback) {
    let excelHeaders = getExcelHeadersAsync(fileName, fileData)
    let isValid = excelHeaders.indexOf(organization.UIDM) >= 0 && excelHeaders.indexOf(organization.UVM) >= 0
    if (isValid)
        callback(null, true)
    else {
        throw Meteor.Error('403', `The uploaded excel file must
     contain the organization UIDM and UVM as headers.
     Please make sure the uploaded file contains this headers:
      ${organization.UIDM},${organization.UVM}`)
    }
}
var validateExcelFileAsync = Async.wrap(validateExcelFile);

function getDataFromExcelFile(fileName, fileData, organization, callback) {
    validateExcelFileAsync(fileName, fileData, organization)
    let excelAsJson = parseExcelToJsonAsync(fileName, fileData, {header:1})
    callback(null,excelAsJson.shift())
}
var getDataFromExcelFileAsync = Async.wrap(getDataFromExcelFile);
