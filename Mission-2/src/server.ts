import mongoose from "mongoose";
import app from './app';

const port: number = 5000;

//database connection..
const bootstrap = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practiceMongoose");
    console.log("database connected succesfully");
    app.listen(port, () => {
      console.log(`My server listening at Port: ${port}`);
    });
  } catch (error) {
    console.log("Falied to connect: ", error);
  }
};

bootstrap();
