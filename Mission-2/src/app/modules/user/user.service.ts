import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  //intance of userModel class
  const user = new UserModel(payload);

  await user.save();
  return user;
};


export const getUsersFromDB = async () => {
  const users = await UserModel.find();
  return users;
}

//data
// {
//   name: {
//     firstName: "Rabbi",
//     middleName: "Al",
//     lastName: "Islam",
//   },
//   age: 21,
//   id: "500023",
//   role: "student",
//   password: "sini",
//   dateOfBirth: "12/03/2002",
//   gender: "female",
//   contactNo: "01692837456",
//   emergencyConNo: "01872876863",
//   presentAddress: "Dhaka",
//   permanentAddress: "Jannat - in sha ALLAH",
// }