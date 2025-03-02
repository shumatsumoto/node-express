const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
const activities = require("./activities");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", (req, res) => {
  fs.writeFile(__dirname + "/data.txt", req.body.activity, () => {
    res.send("Data saved to file");
  })
})

app.get("/update", (req, res) => {
  console.log(activities);
  res.send(activities);
})

app.listen(5050, () => {
  console.log('Server is running on http://localhost:5050');
});
