// * Packages
const express = require('express');
const { body, validationResult } = require('express-validator');
const notes = express.Router();
// * Custom Packages
const fetchUser = require('../middleware/fetchUser');
// ? Notes Model
const Note = require('../DB/models/Note');

// ? ROUTE 1 -> Getting All Notes
notes.get('/',
    fetchUser,
    async (req, res) => {
        try {
            const notes = await Note.find({user : req.user.user });
            res.status(200).json(notes);
        } catch (error) {
            // console.log({ "Error": error });
            res.status(500).json({ "status": "error", "msg": "Somthing Went Wrong", })
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
            res.status(400).send({ errors: result.array() });
        }
        else {
            try {
                const { title, description, tags } = req.body;
                const note = new Note({
                    title, description, tags, user: req.user.user
                })
                const savedNote = await note.save();
                res.status(202).json({ "status": "success", "Note Saved": savedNote });
            } catch (error) {
                // console.log({ "Error": error });
                res.status(500).json({ "status": "error", "msg": "Somthing Went Wrong", })
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
                return res.status(404).json({ "status": "error", "msg": "Not Found!!", });
            }
            else {
                // ? If Note Avaiable But Does Not Belong To The Logged In User Then 
                if (foundNoteById.user.toString() !== req.user.user) {
                    return res.status(401).json({ "status": "Access Denied", "msg": "You Are Not Authorized", });
                }
                else {
                    // ? If Note Avaiable And Also Belongs To The Logged In User Then 
                    foundNoteById = await Note.findByIdAndUpdate(req.params.id, { $set: updatedNote }, { new: true });
                    res.status(202).json({ "status": "success", "Note Updated": foundNoteById });
                }
            }
        } catch (error) {
            // console.log({ "Error": error });
            res.status(500).json({ "status": "error", "msg": "Somthing Went Wrong" })
        }

    }
)
// ? ROUTE 4 -> Deleting A Note
notes.delete('/:id',
    fetchUser,
    async (req, res) => {
        try {
            // ? Find The Note To Be deleted And Then delete It
            let foundNoteById = await Note.findById(req.params.id);

            // ? If Note Does Not Available
            if (!foundNoteById) {
                return res.status(404).json({ "status": "404", "msg": "Not Found!!", });
            }
            else {
                // ? If Note Avaiable Then Delete it
                if (foundNoteById.user.toString() !== req.user.user) {
                    return res.status(401).json({ "status": "Access Denied", "msg": "You Are Not Authorized", });
                }
                else {
                    // ? If Note Avaiable And Also Belongs To The Logged In User Then 
                    foundNoteById = await Note.findByIdAndDelete(req.params.id,);
                    res.status(202).json({ "status": "Succes", "Your Note Has Been Deleted!!": foundNoteById });
                }
            }
        } catch (error) {
            // console.log({ "Error": error });
            res.status(500).json({ "status": "error", "msg": "Somthing Went Wrong" })
        }

    }
)

module.exports = notes;