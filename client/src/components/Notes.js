import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteCard from './NoteCard';
import noteContext from '../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';

export default function Notes(props) {
  // ? Variables 
  let navigate = useNavigate();
  const { NotesFull, getAllNotes, editNote } = useContext(noteContext);
  const [inputNote, setnote] = useState({ id: "", updatedTitle: '', updatedDescription: '', updatedTags: '' });

  useEffect(() => {
    if (localStorage.getItem('MindScribeAuthToken')) {
      getAllNotes();
    }
    else {
      navigate('/login');
      props.showAlert('warning', 'Login To Access It!!')
    }
    // eslint-disable-next-line
  })

  let refOpen = useRef(null);
  let refClose = useRef(null);

  const updateNote = (newNote) => {
    refOpen.current.click();
    setnote({ id: newNote._id, updatedTitle: newNote.title, updatedDescription: newNote.description, updatedTags: newNote.tags });
  }

  const handleUpdateBtn = (e) => {
    e.preventDefault();
    editNote(inputNote.id, inputNote.updatedTitle, inputNote.updatedDescription, inputNote.updatedTags)
    refClose.current.click();
    props.showAlert('success',"Note Updated!");
  }

  const handleInpueChange = (e) => {
    // setnote({ ...inputNote, [e.target.name]: [e.target.value] });
    setnote({ ...inputNote, [e.target.name]: e.target.value });
  }

  return (
    <section className='px-20 py-10'>
      <>
        <label ref={refOpen} htmlFor="my-modal-3" className="btn hidden">open modal</label>
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
                  <input required="required" minLength={5} onChange={handleInpueChange} value={inputNote.updatedTitle} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='updatedTitle' id="updatedTitle" type="text" />
                  {/* <p className="text-gray-600 text-xs italic">Remove if not needed</p> */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Tags
                  </label>
                  <input required="required" minLength={2} onChange={handleInpueChange} value={inputNote.updatedTags} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='updatedTags' id="updatedTags" type="text" />
                  {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Description
                  </label>
                  <textarea required="required" minLength={8} onChange={handleInpueChange} value={inputNote.updatedDescription} name='updatedDescription' className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="updatedDescription"></textarea>
                  {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
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
      </>
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
