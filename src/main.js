const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // unblocking cors policy

const dbadduser = require("./db.add.user");

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

// started teh server.
app.listen(3000);
