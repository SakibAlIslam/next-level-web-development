import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors'
import { Schema, model } from 'mongoose';

const app: Application = express();

app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
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
            middleName: string;
            lastName: string
        };
        age: number;
        id: string;
        role: 'student';
        password: string;
        dateOfBirth?: string;
        gender: 'male' | 'female';
        email?: string;
        contactNo: string;
        emergencyConNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

    //creating schema using Interface:
    const userSchema = new Schema<IUser>({

    })

    res.send('Running in browser');
});

export default app;