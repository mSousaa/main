const express = require('express');
const path = require('path');
const RoutesPublics = require('./routes/RoutesPublics');
const RoutesPrivates = require('./routes/RoutesPrivates');
const app = express();
const cors = require("cors")
app.use(cors())


app.use(express.static(path.join(__dirname, 'frontend')));


app.use(express.json());


app.use(RoutesPublics);
app.use(RoutesPrivates);

module.exports = app;
