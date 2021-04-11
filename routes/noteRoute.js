const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel")
// taking the data posted to the route and saving it on the back end
router.route("/create").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    });

    newNote.save();
})
//sends data to Notes page 
router.route("/notes").get((req, res) => {
    // takes the Note model and calls the find method
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

module.exports = router