const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(5050, () => {
  console.log('Server is running on http://localhost:5050');
});
