const express = require('express');
const app = express();
const coronaData = require('./coronaData');

app.get("/", (req, res) => {
  res.send(coronaData);
});

app.listen(5050, () => {
  console.log('Server is running on http://localhost:5050');
});
