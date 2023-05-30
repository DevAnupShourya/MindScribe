import React, { useState } from 'react';
import noteContext from './NoteContext';

const NoteState = (props) => {
    // ? Variables 
    const url = "http://127.0.0.1:5000"; // TODO : Get from Config

    const notesInitial = [];

    const [NotesFull, setnotes] = useState(notesInitial);
    // * Get All Notes
    const getAllNotes = async () => {
        // ? API Call
        const request = await fetch(`${url}/api/notes/`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                "auth-token" : localStorage.getItem('MindScribeAuthToken')
            }
        })
        const response = await request.json();
        // ? Giving All Notes to State
        setnotes(response);
    };

    // * Add A Note
    const addNote = async (inputNote) => {// ? API Call
        const request = await fetch(`${url}/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                "auth-token" : localStorage.getItem('MindScribeAuthToken')
            },
            body: JSON.stringify(inputNote)
        })
        const response = await request.json();
        console.log("Note Added :", response);

        const newNote = {
            title: inputNote.title,
            description: inputNote.description,
            tags: inputNote.tags
        };
        let updatedNotes = [...NotesFull, { ...newNote }];
        setnotes(updatedNotes);
        // console.log("After : ", NotesFull);
    };
    // ? Edit A Note
    const editNote = async (id, title, description, tags) => {
        // ? API Call
        const request = await fetch(`${url}/api/notes/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
                "auth-token": localStorage.getItem('MindScribeAuthToken')
            },
            body: JSON.stringify({ title, description, tags })
        })
        const response = await request.json();
        console.log("Note Updated :", response);


        // ? For Client
        for (let index = 0; index < NotesFull.length; index++) {
            const element = NotesFull[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tags = tags;
            }
        }

    }
    // ? Delete A Note
    const deleteNote = async (id) => {
        // ? API Call
        const request = await fetch(`${url}/api/notes/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
                "auth-token" : localStorage.getItem('MindScribeAuthToken')
            }
        })
        const response = await request.json();
        console.log('Deleting the Note ', response);
        const updatedNotes = NotesFull.filter((note) => { return note._id !== id }); // true return
        setnotes(updatedNotes);
    }

    return (
        <noteContext.Provider value={{ getAllNotes, NotesFull, addNote, editNote, deleteNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;