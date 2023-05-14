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