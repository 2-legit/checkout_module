const express = require('express');
const path = require('path');
const db = require('../data/index');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => (console.log(`Listening on ${port}`)));
