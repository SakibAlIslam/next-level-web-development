type MandatoryType = {
  name: string;
  age: number;
  salary: number;
};

interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
  other: {
    business: string[]
  };
}

// const addMeInCrushMindCon = <T extends {name: string, age: number, salary: number}>(myInfo: T): T => {
//   const genCrush = "kate";
//   const myNewData = { genCrush, ...myInfo }; //compile in run time
//   return myNewData;
// };

const addMeInCrushMindCon = <T extends MandatoryInterface>(myInfo: T): T => {
  const genCrush = "kate";
  const myNewData = { genCrush, ...myInfo }; //compile in run time
  return myNewData;
};

const myInfoCon: MandatoryInterface = {
  name: "Sakib",
  age: 100,
  salary: 1000000,
  other: {
    business: ['Software', 'Fish']
  }
};

const resCon = addMeInCrushMindCon<MandatoryInterface>(myInfoCon);




//3.7

type PersonTypeCon = {
    name: string;
    age: number;
    address: string;
}

type newType = 'name' | 'age' | 'address';

type newTypeUsingKeyOf = keyof PersonTypeCon;

//normal
const normalTypeAlias: newType = 'name';
//keyof
const newKeyofType: newTypeUsingKeyOf = 'address'


//function key of usage
const getPropertyCon = <X, Y extends keyof X>(obj: X, key: Y) => { // for extending X, now Y = 'name' | 'key'
    return obj[key]
}

const propertyCon = getPropertyCon({
    name: 'Mr. X',
    age: 100
}, 'name');

//PH Example

function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

console.log(getArrayItem(users, 0, "name"));