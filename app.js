console.log("app.js file  is connected");
const fs= require('fs');
const yargs=require('yargs');
const notes=require('./notes.js')
var argv=yargs.argv;
var command=process.argv[2];
console.log("command :", command);
console.log('yargs',argv);
if(command==='list'){
    notes.getAllNotes();
}
else if(command==='read'){
 var note=   notes.readNote(argv.title);
//console.log(readNote);
 if(note){
    notes.logNotes(note);
 }
else{
    console.log("your note could not be found");
}
}
else if(command==='add'){
   var note= notes.addNote(argv.title,argv.body);
if(note){
    
    console.log("note created");
notes.logNotes(note);
}
else{
    console.log("Note could not be created, there is already a note with same name");
}
}
else if(command==='remove'){
 var removedNote=   notes.removeNote(argv.title);
var message=removedNote?`your note ${argv.title} was removed`:'note could not be deleted';
console.log(message);
}
else{
    console.log("not a valid command");
}