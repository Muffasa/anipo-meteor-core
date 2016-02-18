import {Organizations} from 'collections/organizations';// bug fix to create 
//System.register("server/methods", [], function(exports_1) on generated methods./**
import {Files} from 'collections/files' 
 

Meteor.methods({
    testm: function(input){
        console.log("this is what i got: "+input)
        },
    excelTest: function(){
        console.log("Excel:" +JSON.stringify(new Excel('xlsx')))
        },
    getParticipants: function(fileId){
       console.log('entered getParticipants, fileId: '+ fileId)
       let file = Files.findOne(fileId)
       console.log('file: '+JSON.stringify(file))
       let fileType = file.original.name.split('.')[1]
       console.log('fileType: '+fileType)
        let excel_parser = new Excel(fileType)
        let workbook = excel_parser.readFile(file.url)
        
        let testSheet = workbook.SheetNames;



        let sheet = workbook.Sheets[testSheet[0]]

        // You can get the sheet as list of lists.
        //var options = { header : 1 }

        // Or you  can get an object with column headers as keys.  
        //var options = { header : ['title', 'fName', 'sName' ,'address' ] }

        // If options is empty or omitted, it should use the first-row headers by default. 
        // However this doesn't seem to work with all Excel worksheets. 
        let options = {}

        // Generate the JSON like so:

        let workbookJson = excel_parser.utils.sheet_to_json( sheet, options );
        return workbookJson
       }
    })