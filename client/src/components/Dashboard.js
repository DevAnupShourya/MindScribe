import React from 'react';
// ? Note Adding Form Component
import NoteForm from './NoteForm';
// ? Notes Displaying Component
import Notes from './Notes';

export default function Dashboard(props) {
  return (
    <>
        <NoteForm showAlert={props.showAlert} />
        <Notes showAlert={props.showAlert} />
    </>
  )
}
