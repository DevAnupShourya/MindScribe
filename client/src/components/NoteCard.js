import React, { useContext } from 'react';

// ? Custom Note ContextAPI
import { NoteContext } from '../context/NoteContextAPI';
// ? Custom Style
import '../styles/cardGrid.css';;

export default function NoteCard(props) {
    const { deleteNote } = useContext(NoteContext);
    const { notedata, updateNote, showAlert } = props;

    return (
        <div id='card' key={'card'} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-800 dark:text-gray-400">Mar 10, 2019</span>
                <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{notedata.tags}</span>
            </div>

            <div className="mt-2 h-3/4">
                <h1 className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 ">{notedata.title}</h1>
                <p id='desc' className="mt-2 overflow-x-scroll h-full text-gray-600 dark:text-gray-300 ">{notedata.description}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
                <button className="btn btn-info" onClick={() => { updateNote(notedata) }} title='Edit This Note'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
                <button className="btn btn-error" onClick={() => { deleteNote(notedata._id); showAlert('error', "Note Deleted!") }} title='Delete This Note'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>
        </div>
    )
}

// <div className="firstAnimation p-2 lg:w-1/3 md:w-2/3 sm:w-full lg:hover:w-1/3 md:hover:w-2/3 sm:hover:w-full">
// <div className="secondAnimation">
//     <div className="card">
//         <div className="card-body w-full">
//             <h2 id='title' className="h-[40px] overflow-y-scroll scrollbar-none card-title">{notedata.title}</h2>
//             <p id='desc' className='h-[200px] overflow-y-scroll scrollbar-none'>{notedata.description}</p>
//             <h4 id='tags' className='h-[40px] overflow-y-scroll scrollbar-none text-indigo-400 font-bold'>{notedata.tags}</h4>
//             <div className="card-actions justify-end">
//                 <button onClick={() => { updateNote(notedata) }} className="btn btn-info">
//                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
//                 </button>
//                 <button onClick={() => { deleteNote(notedata._id); showAlert('error', "Note Deleted!") }} className="btn btn-error">
//                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
//                 </button>
//             </div>
//         </div>
//     </div>
// </div>
// </div>