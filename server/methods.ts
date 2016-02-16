import {Organizations} from 'collections/organizations';// bug fix to create 
//System.register("server/methods", [], function(exports_1) on generated methods./**
 
 

Meteor.methods({
    testm: function(input){
        console.log("this is what i got: "+input)
        },
    excelTest: function(){
        console.log("Excel:" +JSON.stringify(new Excel('xlsx')))
        }  
    })