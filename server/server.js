const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send("Hi from SERVER");
});
app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.listen(5600, () => {
  console.log(`Server is starting on port 5600`);
});
