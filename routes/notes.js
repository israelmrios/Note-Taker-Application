const express = require('express');
const fs = require('fs');
const db = require('../db/db.json');
const router = express.Router();
const uuid = require('uuid');

router.use(express.static('db'));

router.get('/notes', (req, res) => {
    // res.sendFile(path.join(__dirname, "/db/db.json"))
    res.json(db)
});

router.post('/notes', (req, res) => {
    const currNotes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNote = req.body;
    newNote.id = uuid.v4();
    currNotes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(currNotes));
    res.json(currNotes)
});

router.delete('/notes/:id', (req, res) => {
    res.json(db)
});

module.exports = router