import { Request, Response, NextFunction } from "express";
import { UserModel } from "./user.model";
import { createUserToDB, getAllAdminFromDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

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

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const {id} = req.params;
  console.log('hitted by get user');
  const singleUser = await getUserByIdFromDB(id);

  res.status(200).json({
    status: 200,
    data: singleUser
  });
}


export const getAllAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
  const admins = await getAllAdminFromDB();
  console.log('hitted by admin', admins);

  res.status(200).json({
    status: 200,
    data: admins
  });
}