import React, { useContext, useState } from 'react';
// ? Custom Note Context API
import {NoteContext} from '../context/NoteContextAPI';
// ? Custom Style
import '../styles/notestyle.css';

export default function NoteForm(props) {
  const { addNote } = useContext(NoteContext);

  const [inputNote, setnote] = useState({ title: '', description: '', tags: '' });

  const handleSaveBtn = (e) => {
    e.preventDefault();
    addNote(inputNote);
    props.showAlert('success',"Note Creted Succesfully!");
    setnote({ title: '', description: '', tags: '' })
  }

  const handleInputChange = (e) => {
    setnote({ ...inputNote, [e.target.name]: e.target.value });
  }
  return (
    <div className="w-full grid place-items-center my-10 -z-10">
      <div className="card lg:w-3/5 md:w-2/3 sm:w-3/4 ">
        <h1 className="singup text-indigo-400">New Note</h1>
        <div className="inputBox1 w-5/6">
          <input type="text" minLength={5} name='title' value={inputNote.title} onChange={handleInputChange} required="required" />
          <span className="user">Title</span>
        </div>
        <div className="inputBox w-5/6">
          <input type="text" minLength={2} name='tags' value={inputNote.tags} onChange={handleInputChange} required="required" />
          <span>Tags</span>
        </div>
        <div className="inputBox w-5/6">
          <textarea type="text" minLength={8} name='description' value={inputNote.description} required="required" onChange={handleInputChange} rows={3}>
          </textarea>
          <span>Description</span>
        </div>
        <button disabled={inputNote.title.length < 5 ||  inputNote.description.length < 8}  className="enter" onClick={handleSaveBtn}>Save Note</button>
      </div>
    </div>
  )
}
