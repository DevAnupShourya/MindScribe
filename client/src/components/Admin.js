import React from 'react'
import NoteForm from './NoteForm';
import Notes from './Notes';

export default function Admin(props) {
  return (
    <>
        <NoteForm showAlert={props.showAlert} />
        <Notes showAlert={props.showAlert} />
    </>
  )
}
