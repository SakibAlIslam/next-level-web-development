import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//application routes
import userRoutes from './app/modules/user/user.route';

app.use(cors());

//parse data
app.use(express.json());
//url encoded data
app.use(express.urlencoded({ extended: true }));

// app.get('/api/v1/user', userRoutes);
app.use('/api/v1/user', userRoutes);

export default app;


//breakdown... 

/*
1. interface - interface.ts - user.interface.ts
2. Schema, Model - Model.ts - user.model.ts

3. route -route.ts - user.route.ts
   - route function -> Controller.ts  - user.controller.ts

4. Database query / logic function - Service.ts - user.service.ts

*/