//normal ts arrow function
const createArray = (param: string): string[] => {
  return [param];
};

const result1 = createArray("ban");

//generic ts arrow function
const genericCreateArray = <T>(param: T): T[] => {
  return [param];
};

const resultGenArr = genericCreateArray<string>("123");
const resultGenArrBool = genericCreateArray<boolean>(true);

type genObjName = {
  name: string;
};

const reGenObj = genericCreateArray<genObjName>({ name: "sakib" });

//tuple................................
const myTuple = <T, U>(param1: T, param2: U): [T, U] => {
  return [param1, param2];
};

const tupleCall = myTuple<number, Array<string>>(9, ["hello"]);

//spread operator....

// const myNewData = {genCrush, ...myInfo}

const addMeInCrushMind = <T>(myInfo: T): T => {
  const genCrush = "kate";
  const myNewData = { genCrush, ...myInfo }; //compile in run time
  return myNewData; //check myNewData before the compilation, so without generic it will be got only the genCrush as object key: value
};

const myInfo = {
    name: "Sakib",
    age: 100,
    salary: 1000000,
  };

const res = addMeInCrushMind(myInfo);
console.log(res.age)
