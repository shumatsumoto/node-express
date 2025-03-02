const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(5050, () => {
  console.log('Server is running on http://localhost:5050');
});
