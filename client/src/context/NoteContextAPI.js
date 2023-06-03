import React, { useState, createContext } from 'react';

// ? Helper Functions
import { addData, deleteData, editData, getAllData } from "../utils/notesFunctions";
// ? Note Context API
export const NoteContext = createContext();

export const NoteContextAPI = (props) => {
    // ? Notes State 
    const [NotesFull, setnotes] = useState([]);

    // * Getting All Notes
    const getAllNotes = async () => {
        const notesData = await getAllData();
        // ? Updating in State
        setnotes(notesData.data);
    }

    // * Adding A Note
    const addNote = async (inputNote) => {
        // ? API Call
        await addData(inputNote);
        // ? Updating in State
        setnotes(
            [...NotesFull,
            {
                title: inputNote.title,
                description: inputNote.description,
                tags: inputNote.tags
            }
            ]
        );
    };

    // * Edit A Note
    const editNote = async (id, title, description, tags) => {
        // ? API Call
        await editData(id, title, description, tags);

        // ? Updating in State
        for (let index = 0; index < NotesFull.length; index++) {
            const element = NotesFull[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tags = tags;
            }
        }

    }

    // * Delete A Note
    const deleteNote = async (id) => {
        // ? API Call
        await deleteData(id);

        // ? Updating in State
        const updatedNotes = NotesFull.filter((note) => { return note._id !== id }); // true return
        setnotes(updatedNotes);
    }

    return (
        <NoteContext.Provider value={{ getAllNotes, NotesFull, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}