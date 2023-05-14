import { UserModel } from "./user.model";

export const createUserToDB = async () => {
  //intance of userModel class
  const user = new UserModel({
    name: {
      firstName: "Siam",
      middleName: "Al",
      lastName: "Islam",
    },
    age: 19,
    id: "300023",
    role: "student",
    password: "siam",
    dateOfBirth: "12/03/2003",
    gender: "male",
    contactNo: "01692837456",
    emergencyConNo: "01872876863",
    presentAddress: "Khulna",
    permanentAddress: "Jannat - in sha ALLAH",
  });

  await user.save();
  return user;
};
