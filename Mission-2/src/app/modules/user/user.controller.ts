import { Request, Response, NextFunction } from "express";
import { UserModel } from "./user.model";
import { createUserToDB, getUsersFromDB } from "./user.service";

export const userController = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const user = await createUserToDB(data);
  
  res.status(200).json({
    status: 'Success',
    data: user
  });
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const user = await getUsersFromDB();
  
  res.status(200).json({
    status: 'Success',
    data: user
  });
};