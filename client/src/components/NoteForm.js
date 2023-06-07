import React, { useContext, useState } from 'react';
// ? Custom Note Context API
import { NoteContext } from '../context/NoteContextAPI';
// ? Custom Style
import '../styles/notestyle.css';

export default function NoteForm(props) {
  const { addNote } = useContext(NoteContext);

  const [inputNote, setnote] = useState({ title: '', description: '', tags: '' });

  const handleSaveBtn = (e) => {
    e.preventDefault();
    addNote(inputNote);
    props.showAlert('success', "Note Creted Succesfully!");
    setnote({ title: '', description: '', tags: '' })
  }

  const handleInputChange = (e) => {
    setnote({ ...inputNote, [e.target.name]: e.target.value });
  }
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8">
      <div className="mb-10 md:mb-16">
        <div className="divider">
          <h2 className="mb-4 text-center text-2xl font-bold text-neutral-content md:mb-6 lg:text-3xl">NEW NOTE</h2>
        </div>
      </div>
      <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2 bg-primary p-10">
        <div>
          <label htmlFor="title" className="block overflow-hidden rounded-md border border-accent px-3 py-2 shadow-sm ocus-within:border-blue-600 focus-within:ring-1 focus-within:ring-border-accent bg-primary-focus" >
            <span className="text-sm font-medium text-accent "> Note Name </span>
            <input  placeholder='Title' minLength={5} name='title' value={inputNote.title} onChange={handleInputChange} required="required" className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 text-2xl font-bold text-secondary bg-primary-focus" />
          </label>
        </div>

        <div>
          <label htmlFor="tags" className="block overflow-hidden rounded-md border border-accent px-3 py-2 shadow-sm ocus-within:border-blue-600 focus-within:ring-1 focus-within:ring-border-accent bg-primary-focus" >
            <span className="text-sm font-medium text-accent "> Note Type </span>
            <input placeholder='General'  minLength={2} name='tags' value={inputNote.tags} onChange={handleInputChange} required="required" className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 text-2xl font-bold text-secondary bg-primary-focus" />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 inline-block text-sm text-accent">Notes</label>
          <textarea placeholder='Today is fantastic'  type="text" minLength={8} name='description' value={inputNote.description} required="required" onChange={handleInputChange} rows={3} className="h-64 w-full rounded border px-3 py-2 outline-none transition duration-100 focus:ring text-2xl font-bold text-secondary bg-primary-focus"></textarea>
        </div>

        <div className="flex items-center justify-between sm:col-span-2">
          <button disabled={inputNote.title.length < 5 || inputNote.description.length < 8} onClick={handleSaveBtn} className="enter">Save Note</button>
        </div>
      </form>
    </div>
  )
}
  // return (
  //   <div className="w-full grid place-items-center my-10 -z-10">
  //     <div className="card bg-primary lg:w-3/5 md:w-2/3 sm:w-3/4 ">
  //       <h1 className="singup text-accent">New Note</h1>
  //       <div className="inputBox1 w-5/6">
  //         <input type="text" minLength={5} name='title' value={inputNote.title} onChange={handleInputChange} required="required" />
  //         <span className="user">Title</span>
  //       </div>
  //       <div className="inputBox w-5/6">
  //         <input type="text" minLength={2} name='tags' value={inputNote.tags} onChange={handleInputChange} required="required" />
  //         <span>Tags</span>
  //       </div>
  //       <div className="inputBox w-5/6">
  //         <textarea type="text" minLength={8} name='description' value={inputNote.description} required="required" onChange={handleInputChange} rows={3}>
  //         </textarea>
  //         <span>Description</span>
  //       </div>
  //       <button disabled={inputNote.title.length < 5 ||  inputNote.description.length < 8}  className="enter" onClick={handleSaveBtn}>Save Note</button>
  //     </div>
  //   </div>
  // )
