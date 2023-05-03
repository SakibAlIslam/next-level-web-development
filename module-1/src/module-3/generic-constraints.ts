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