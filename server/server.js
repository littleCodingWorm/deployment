// 1) Require express & mongoose
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 2) app & express
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

// 3) DB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
// connection.once open?
connection.once('open', () => {
  console.log(`DB connection established successfully!`);
});

// 4) Set router
const todoRouter = require('./routes/todos');

app.use('/', todoRouter);

// 5) start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
