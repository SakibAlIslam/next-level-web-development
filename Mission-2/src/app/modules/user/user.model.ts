import { Schema, model, Model } from "mongoose";
import { IUser, IUserMethods, UserModelCustom } from "./user.interface";

// type UserCustomModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModelCustom, IUserMethods>({
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
  gender: { type: String, required: true, enum: ["male", "female"] },
  email: { type: String, required: false },
  contactNo: { type: String, required: true },
  emergencyConNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});
//instance method creation
userSchema.method("fullName", function fullName() {
  return this?.name?.firstName + " " + this?.name?.lastName;
});
//static method creation
userSchema.static(
  "getAdminUsers",
  async function getAdminUsers() {
    // here this. means this class....
    const admins = await this.find({role: 'admin'});
    return admins
  }
);
export const UserModel = model<IUser, UserModelCustom>("User", userSchema);

//instance method --> instance er method

// class -> instance + method = instance methods
