const express = require('express');
const fs = require('fs');
const db = require('../db/db.json');
const router = express.Router();
const uuid = require('uuid');

router.use(express.static('db'));

// Not sure if the res.sendFile should be used or .json
router.get('/notes', (req, res) => {
    // res.sendFile(path.join(__dirname, "/db/db.json"))
    res.json(db)
});

router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNote = req.body;
    // Enabled uuid so each new note has a random id attached to it
    newNote.id = uuid.v4();
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes)
});

router.delete('/notes/:id', (req, res) => {
    res.json(db)
});

module.exports = router