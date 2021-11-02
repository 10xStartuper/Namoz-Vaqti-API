require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.static(path.join(__dirname, "public"));
app.set("view engine", "ejs");

app.use("/", require("./routes/"));

app.listen(process.env.PORT, () => console.log("Server has been started"));
