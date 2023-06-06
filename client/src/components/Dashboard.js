import React from 'react';
// ? Note Adding Form Component
import NoteForm from './NoteForm';
// ? Notes Displaying Component
import Notes from './Notes';

export default function Dashboard(props) {
  return (
    <div className='py-20 text-neutral text-center'>
      <NoteForm showAlert={props.showAlert} />
      <Notes showAlert={props.showAlert} />
    </div>
  )
}
