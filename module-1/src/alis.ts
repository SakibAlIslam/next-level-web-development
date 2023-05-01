type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
}; // type alias

const crush1: CrushType = {
  name: "Monika",
  age: 25,
  profession: "Doctor",
  address: "Dhaka",
};

const crush2: CrushType = {
  name: "Samira",
  profession: "Engineer",
  address: "Khulna",
};

//boolean
type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

//string
type CrushNameType = string;
const crushName: CrushNameType = "Monika";

//function
type OperationType = (x: number, y: number) => number

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
): number => {
  return operation(number1, number2);
};

calculate(10, 20, (x, y) => x + y); //30
calculate(10, 20, (x, y) => x - y); //-10
