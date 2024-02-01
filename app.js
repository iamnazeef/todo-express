// core module imports


// third-party module imports
const express = require('express');

// local module imports
const route = require('./routes/todo')

const app = express();

// middlewares
app.use(express.json())
app.use(route);

app.listen(3000);