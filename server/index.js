require('dotenv/config');
const express = require('express');
const path = require('path');
const errorMiddleware = require('./error-middleware');
const logger = require('./logger');

const app = express();

// Init middleware
app.use(logger);
app.use(errorMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
