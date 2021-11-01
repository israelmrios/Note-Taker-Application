const express = require('express');
const htmlRoutes = require('./routes/html');
const notesRouter = require('./routes/notes');


// Added process.env so the app can be deployed to Heroku
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Added notesRouter & htmlRoutes to route the API Notes
app.use('/api', notesRouter);
app.use('/', htmlRoutes);


app.listen(PORT, () =>
    console.log(`See application at http://localhost:${PORT}`)
);