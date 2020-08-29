const express = require("express");
const cors = require("cors");

const app = express();

// Middelware :: Programs :: Which runs in advance.
app.use(cors()); // unblocking cors policy
app.use(express.json()); // this will help to read the data coming in body :: TEXT to JSON

const dbadduser = require("./db.add.user");

// http://localhost:3000/welcome
app.get("/a", (req, res) => {
  res.json({ title: "Welcome!!" });
});

// created an API
// learnt how to read the input; coming from client.
// http://localhost:3000/adduser?username=hello
app.get("/adduser", async (req, res) => {
  try {
    // lets read the query parameter
    const input = req.query;

    // calling db logic :: async :: non blocking
    await dbadduser.addUser(input);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});

// POST API :: FOR TESTIG POSTMAN :: ANDROID :: IOS :: BROWSER
// http://localhost:3000/adduser
app.post("/adduser", async (req, res) => {
  try {
    const input = req.body; // before doing this

    await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});

// started teh server.
app.listen(3000);
