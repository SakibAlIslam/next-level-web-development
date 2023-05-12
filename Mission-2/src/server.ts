const express = require("express");
const mongoose = require("mongoose");
const port = 5000;
const app = express();

//database connection..
const bootstrap = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practiceMongoose");
    console.log("database connected succesfully");
  } catch (error) {
    console.log("Falied to connect: ", error);
  }
}

bootstrap();

app.use("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`My server listening at Port: ${port}`);
});
