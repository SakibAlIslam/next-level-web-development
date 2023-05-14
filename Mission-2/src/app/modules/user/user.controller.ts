import { Request, Response, NextFunction } from "express";
import { UserModel } from "./user.model";
import { createUserToDB } from "./user.service";

export const userController = async (req: Request, res: Response, next: NextFunction) => {
  const user = await createUserToDB();
  
  res.status(200).json({
    status: 'Success',
    data: user
  });
};
