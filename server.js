const express = require("express");
const app = express();
const session = require("express-session");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve Static css/image files
app.use(express.static("public"));


 // GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })

app.listen(process.env.PORT || 3000, function () {
    console.log("listening in port 3000");
  });
  