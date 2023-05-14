import { HydratedDocument, Model } from "mongoose";

export interface IUser {
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

export interface IUserMethods {
  fullName(): string;
}

//statics
export interface UserModelCustom extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
