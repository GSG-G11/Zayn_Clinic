const express = require('express');
const { join } = require('path');

const app = express();

app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 5000);

module.exports = app;
