const express = require('express');
const htmlRoutes = require('./routes/html');
const notesRouter = require('./routes/notes');


const app = express();
// Added process.env so the app can be deployed to Heroku
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Added notesRouter to route the API Notes
app.use('/api', notesRouter);
app.use('/', htmlRoutes);


app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);