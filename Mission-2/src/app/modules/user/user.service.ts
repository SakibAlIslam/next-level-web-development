import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  //intance of userModel class

  //creating a new user...
  const user = new UserModel(payload); //UserModel -> class, user hocche instance

  await user.save(); //built in intance method cause user is an instance
  //custom instance methods.....
  console.log(user.fullName());
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await UserModel.find();
  return users;
};

//get find one
export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  //fill filtering
  const user = await UserModel.findOne(
    { id: payload },
    { name: 1, contactNo: 1, age: 1 }
  );
  return user;
};

export const getAllAdminFromDB = async () => {
  //custom static
  const admins = await UserModel.getAdminUsers();
  console.log('admins: ', admins)
  return admins;
};



























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
