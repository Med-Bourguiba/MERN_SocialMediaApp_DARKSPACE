const express = require("express");
require("dotenv").config();
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.send("Hello Social Media App !");
});


//utiliser le route
const userRoutes = require("./routes/user.router");
app.use("/users", userRoutes);


//Connection DB
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("\x1b[32m%s\x1b[0m", "database connected successfully !");
});


//listner
app.listen(process.env.PORT, () => {
  console.log(`app listning on port \x1b[33m  ${process.env.PORT} \x1b[0m`);
});
