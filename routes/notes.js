const router = require('express').Router();
const db = require('../db');


// Used readNote to make a promise then return data
router.get('/notes', (req, res) => {
    db.readNote().then((data) => res.json(data)).catch(err => res.status(500).json(err))
});

// Used writeNote to make a promise taking the req.body then return data
router.post('/notes', (req, res) => {
    db.writeNotes(req.body).then(note => res.json(note)).catch(err => res.status(500).json(err))
});

// Used deleteNote to make a promise taking the params.id then filtering out the notes without those ids
router.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(() => res.json({ ok: true })).catch(err => res.status(500).json(err))
});

module.exports = router