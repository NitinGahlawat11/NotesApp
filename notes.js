const fs=  require('fs');
var fetchNotes=()=>{
  try{
    var notestr=fs.readFileSync('notes-data.json');  // read the file present in fs , if there is any error ,initialise an empty aarray
    return JSON.parse(notestr);
     }
     catch(e){
    return [];
     }
}; 
var savedNotes=(notes)=>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));

}

var getAllNotes=()=>{
    console.log("your all records are");
}
var readNote=(title)=>{
var notes=fetchNotes();
var filteredNotes=notes.filter((note) => note.title === title);
return filteredNotes[0];
}
var addNote=(title,body)=>{
 var notes=fetchNotes(); // all the notes
 var note={ // each individual note we are trying to create
title,
body
 
 };
 
 var duplicateNotes = notes.filter((note) => note.title === title); //checking for duplicate titles
 
 if (duplicateNotes.length === 0) { // if no duplicate title , push into notes array
   notes.push(note);
   savedNotes(notes);  
 return note;
  }
 
}
var  removeNote=(title)=>{
var notes=fetchNotes();
var filteredNotes=notes.filter((note) => note.title !== title);
savedNotes(filteredNotes);
return notes.length!==filteredNotes.length
}
var logNotes=(note)=>{
  console.log('-------')
  console.log(`TITLE: ${note.title}`);
  console.log(`BODY:${note.body}`);
}
module.exports={
getAllNotes,
readNote,
addNote,
removeNote,
logNotes
}