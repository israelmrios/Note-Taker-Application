const express = require('express');
const path = require('path');

const db = require('./db/db.json');

const app = express();
// Added process.env so the app can be deployed to Heroku
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

// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// );

const notesRouter = require('./routes/notes');
// Added notesRouter to route the API Notes 
app.use('/api', notesRouter);

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);