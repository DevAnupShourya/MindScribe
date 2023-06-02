import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ? Custom Note Context API
import { NoteContext } from '../context/NoteContextAPI';
// ? Sinngle Card Component
import NoteCard from './NoteCard';

// ? to get Cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Notes(props) {
  // ? Variables 
  let navigate = useNavigate();
  // ? Context Functions
  const { NotesFull, getAllNotes, editNote } = useContext(NoteContext);
  // ? 
  const [inputNote, setNote] = useState({ id: "", updatedTitle: '', updatedDescription: '', updatedTags: '' });

  useEffect(() => {
    if (cookies.get('authToken')) {
      getAllNotes();
    }
    else {
      navigate('/login');
      props.showAlert('warning', 'Login To Access It!!')
    }
  })

  // ? Modal Open Btn
  let refOpen = useRef(null);
  // ? Modal Close Btn
  let refClose = useRef(null);

  const updateNote = (newNote) => {
    // ? Opening Modal
    refOpen.current.click();
    setNote({ id: newNote._id, updatedTitle: newNote.title, updatedDescription: newNote.description, updatedTags: newNote.tags });
  }

  const handleUpdateBtn = (e) => {
    e.preventDefault();
    editNote(inputNote.id, inputNote.updatedTitle, inputNote.updatedDescription, inputNote.updatedTags);
    // ? Closing Modal
    refClose.current.click();
    props.showAlert('success', "Note Updated!");
  }

  const handleInputChange = (e) => {
    setNote({ ...inputNote, [e.target.name]: e.target.value });
  }

  return (
    <section className='px-20 py-10'>
      {/* Modal Open */}
      <label ref={refOpen} htmlFor="my-modal-3" className="btn hidden">Open Modal</label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle hidden" />
      <div className="modal bg-opacity-50 backdrop-filter backdrop-blur-sm">
        <div className="modal-box relative text-black">
          <label ref={refClose} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Title
                </label>
                <input required="required" minLength={5} onChange={handleInputChange} value={inputNote.updatedTitle} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='updatedTitle' id="updatedTitle" type="text" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Tags
                </label>
                <input required="required" minLength={2} onChange={handleInputChange} value={inputNote.updatedTags} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='updatedTags' id="updatedTags" type="text" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Description
                </label>
                <textarea required="required" minLength={8} onChange={handleInputChange} value={inputNote.updatedDescription} name='updatedDescription' className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="updatedDescription"></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button disabled={inputNote.updatedTitle.length < 5 || inputNote.updatedDescription.length < 8} onClick={handleUpdateBtn} className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Save</button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
      {/* Modal Close */}
      <h1 className='text-2xl'>All Notes</h1>
      <div className="w-full my-10 flex flex-row flex-wrap justify-evenly">
        {NotesFull.length === 0 && "No Notes to Display"}
        {NotesFull.map((note) => {
          return <NoteCard showAlert={props.showAlert} key={`${note._id}:${note.title}`} notedata={note} updateNote={updateNote} />
        })}
      </div>
    </section>

  )
}
