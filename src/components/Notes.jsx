import React, { useState } from 'react'
import './Notes.css'
import Note from './Note'

const Notes = () => {

 const notatka = [{
    id:1,
    title:'Kupić mleko',
    body:'witanie się',
 },
  {
    id:2,
    title:'Zrobić taska',
    body: 'jestemdrugi'
  },
  {
    id:3,
    title:'fds',
    body: 'gerd'
  },
  {
    id:4,
    title:'fds',
    body: 'gerd'
  },
]

  return (
  <div className="notes-container">
      {notatka.map((note) => (
          <Note key={note.id} title={note.title} body={note.body} />
      ))}
    </div>
  );
}

export default Notes