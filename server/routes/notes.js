// * Packages
const express = require('express');
const { body, validationResult } = require('express-validator');
const notes = express.Router();

// ? Utility Function
const apiResponse = require('../utility/apiResponse');
// * Custom Packages
const fetchUser = require('../middleware/fetchUser');
// ? Notes Model
const Note = require('../DB/models/Note');

// ? ROUTE 1 -> Getting All Notes
notes.get('/',
    fetchUser,
    async (req, res) => {
        try {
            const notes = await Note.find({ user: req.userID });
            // ? if No Notes written Yet
            if (notes.length < 1) {
                return res.status(200).json(apiResponse(true, "Zero Notes To Display", []));
            }
            return res.status(200).json(apiResponse(true , "All Notes" , notes));
        } catch (error) {
            return res.status(500).json(apiResponse(false , "Sorry ! Somthing Went Wrong..."))
        }
    }
)
// ? ROUTE 2 -> Creating A Note
notes.post('/',
    fetchUser,
    [
        body("title", "Enter Valid Title").isLength({ min: 5 }),
        body("description", "Enter Valid Description").isLength({ min: 8 })
    ],
    async (req, res) => {
        // ? Throwing Error By Validator 
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json(apiResponse(false , "Validation Error" , result.array() ));
        }
        else {
            try {
                const { title, description, tags } = req.body;
                const note = new Note({
                    title, description, tags, user: req.userID
                })
                const savedNote = await note.save();
                return res.status(202).json(apiResponse(true , "Note Saved" , savedNote));
            } catch (error) {
                return res.status(500).json(apiResponse(false , "Sorry ! Somthing Went Wrong..."))
            }
        }
    }
)
// ? ROUTE 3 -> Updating A Note
notes.put('/:id',
    fetchUser,
    async (req, res) => {
        try {
            // ? Getting data from body
            const { title, description, tags } = req.body;
            const updatedNote = {};

            // ? Geting Required Fields if Avaiable
            if (title) { updatedNote.title = title };
            if (description) { updatedNote.description = description };
            if (tags) { updatedNote.tags = tags };

            // ? Find The Note To Be Updated And Then Update It
            let foundNoteById = await Note.findById(req.params.id);
            // ? If Note Does Not Available
            if (!foundNoteById) {
                return res.status(404).json(apiResponse(false , "Note Note Found!"));
            }
            else {
                // ? If Note Avaiable But Does Not Belong To The Logged In User Then 
                if (foundNoteById.user.toString() !== req.userID.toString()) {
                    return res.status(401).json(apiResponse(false , "Access Denied : You Are Not Authorized To Access it!"));
                }
                else {
                    // ? If Note Avaiable And Also Belongs To The Logged In User Then 
                    foundNoteById = await Note.findByIdAndUpdate(req.params.id.toString() , { $set: updatedNote }, { new: true });
                    return res.status(202).json(apiResponse(true, 'Note Updated Successfully' , foundNoteById));
                }
            }
        } catch (error) {
            return res.status(500).json(apiResponse(false , "Sorry ! Somthing Went Wrong..."))
        }

    }
)
// ? ROUTE 4 -> Deleting A Note
notes.delete('/:id',
    fetchUser,
    async (req, res) => {
        try {
            // ? Find The Note To Be deleted And Then delete It
            let foundNoteById = await Note.findById(req.params.id.toString());
            // ? If Note Does Not Available
            if (!foundNoteById) {
                return res.status(404).json(apiResponse(false, "404 : Note Not Found! "));
            }
            else {
                // ? If Note Avaiable Then Delete it
                if (foundNoteById.user.toString() !== req.userID.toString()) {
                    return res.status(401).json(apiResponse(false, "Access Denied : You Are Not Authorized To Access it!"));
                }
                else {
                    // ? If Note Avaiable And Also Belongs To The Logged In User Then 
                    foundNoteById = await Note.findByIdAndDelete(req.params.id.toString());
                    return res.status(202).json(apiResponse(true , 'Your Note Has Been Deleted' , foundNoteById));
                }
            }
        } catch (error) {
            return res.status(500).json(apiResponse(false , "Sorry ! Somthing Went Wrong..."))
        }

    }
)

module.exports = notes;