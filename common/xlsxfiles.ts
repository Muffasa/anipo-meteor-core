


export var XLSXFiles = new FS.Collection("xlsxfiles", {
  stores: [new FS.Store.FileSystem("xlsxfiles", {path: "~/uploads"})]
})

XLSXFiles.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
})