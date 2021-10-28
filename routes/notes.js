const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(db)
});

router.post('/notes', (req, res) => {
    res.json(db)
});

router.delete('/notes/:id', (req, res) => {
    res.json(db)
});

module.exports = router