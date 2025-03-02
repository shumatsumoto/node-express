const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", (req, res) => {
  console.log(req.body.activity);
})


app.listen(5050, () => {
  console.log('Server is running on http://localhost:5050');
});
