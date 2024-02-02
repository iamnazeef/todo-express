/**
 * core module imports
 */

/**
 * third-party module imports
 */
const express = require('express');

/**
 * local module imports
 */
const route = require('./routes/todo')

const app = express();

/** 
 * middlewares
 */
app.use(express.json())
app.use(route);
app.use((req, res, next) => {
  res.send({
      "ERROR":"PAGE NOT FOUND",
      "STATUS_CODE":"404"
  })
})

app.listen(3000);