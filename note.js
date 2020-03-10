const fs = require('fs')


function fetchNotes() {
    try {
        return (JSON.parse(fs.readFileSync('greetings.txt')))
    } catch (err) {
        return []
    }
}

function addNote(title, body) {
    var notes = fetchNotes()
    var note = {
        title,
        body
    }
    notes.push(note)
    fs.writeFileSync('greetings.txt', JSON.stringify(notes))

}

function listNotes(){
    var notes = fetchNotes()
    notes.forEach(note => console.log('title :',note.title , ' body: ',note.body))
}

function removeNote(inputTitle){
    var notes = fetchNotes()
    updated =notes.filter(note => note.title !== inputTitle)

    fs.writeFileSync('greetings.txt', JSON.stringify(updated))
}

module.exports = {
    addNote,
    listNotes,
    removeNote
}