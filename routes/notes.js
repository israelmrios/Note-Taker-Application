const router = require('express').Router();
const db = require('../db');


// Not sure if the res.sendFile should be used or .json
router.get('/notes', (req, res) => {
    db.readNote().then((data) => res.json(data)).catch(err => res.status(500).json(err))
});


router.post('/notes', (req, res) => {
    db.writeNotes(req.body).then(note => res.json(note)).catch(err => res.status(500).json(err))
});




router.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(() => res.json({ ok: true })).catch(err => res.status(500).json(err))
});

module.exports = router