require('dotenv').config();
const express = require("express");
const path = require("path");
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const app = express();

const pool = require("./api/v1/pool");

app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api/v1/pools', pool);

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})