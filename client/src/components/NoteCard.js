import React, { useContext } from 'react';
import '../notecardStyle.css';
import noteContext from '../context/notes/NoteContext';


export default function NoteCard(props) {
    const { deleteNote } = useContext(noteContext);
    const {notedata , updateNote} = props;
    return (
        // p-2 lg:w-1/3 md:w-2/3 sm:w-full hover:lg:w-1/3 hover:md:w-1/3 hover:sm:w-full
        <div id='card' className="firstAnimation  p-2 lg:w-1/3 md:w-2/3 sm:w-full lg:hover:w-1/3 md:hover:w-2/3 sm:hover:w-full">
            <div className="secondAnimation">
                <div className="card">
                    <div className="card-body w-full">
                        <h2 id='title' className="h-[40px] overflow-y-scroll scrollbar-none card-title">{notedata.title}</h2>
                        <p id='desc' className='h-[200px] overflow-y-scroll scrollbar-none'>{notedata.description}</p>
                        <h4 id='desc' className='h-[40px] overflow-y-scroll scrollbar-none text-indigo-400 font-bold'>{notedata.tags}</h4>
                        <div className="card-actions justify-end">
                            <button onClick={() => { updateNote(notedata) }} className="btn btn-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></button>
                            <button onClick={() => { deleteNote(notedata._id);  props.showAlert('error' , "Note Deleted!")}} className="btn btn-error"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

