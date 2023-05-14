import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

app.use(cors());

//parse data
app.use(express.json());
//url encoded data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting a test data in mongodb

  /*
    step1: Interface
    step2: Schema
    step3: Model
    step4: Query
    */

  //creating an interface
  interface IUser {
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    age: number;
    id: string;
    role: "student";
    password: string;
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyConNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  //creating schema using Interface:
  const userSchema = new Schema<IUser>({
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    age: { type: Number, required: true },
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: String, required: false },
    gender: { type: String, enum: ["male", "female"], required: true },
    email: { type: String, required: false },
    contactNo: { type: String, required: true },
    emergencyConNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });

  res.send("Running in browser");
});

export default app;
