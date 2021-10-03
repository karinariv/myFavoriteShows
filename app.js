// Karina Guadalupe Rivera Garnica - October 2021 //
const express = require('express')
const app = express();
const port = 3001;
const mainRouter = require('./routes/mainRouter');

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.json());

app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`My Favorite Shows - App - listening on port ${port} 😉`)
});