const { json } = require('express');
const express = require('express');
const path = require('path');

const db = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

const notesRouter = require('./routes/notes');

app.use('/api', notesRouter);

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);