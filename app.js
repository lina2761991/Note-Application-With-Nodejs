
const yargs = require('yargs')
const fs = require('fs')
const notes = require('./note.js')

let title = yargs.argv.title
let body = yargs.argv.body


    if (yargs.argv._[0] ==='remove'){
        notes.removeNote(title)
    }
    else if (yargs.argv._[0]==='add'){
        notes.addNote(title,body)
    }
        
    else if (yargs.argv._[0]==='show'){
        notes.listNotes()
    }
        else{
            return  console.log('invalid')
        }

