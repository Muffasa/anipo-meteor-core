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
    }
})

