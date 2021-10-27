const express = require('express');
const path = require('path');

const db = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// );

app.get('/api/notes', (req, res) => res.json(db));

app.post('/api/notes', (req, res) => res.json(db));

app.delete('/api/notes/:id', (req, res) => res.json(db));

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);