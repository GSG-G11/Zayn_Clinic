const express = require('express');
const { join } = require('path');
const router = require('./controller/index');

const app = express();

app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 8080);
app.use(router);
module.exports = app;
