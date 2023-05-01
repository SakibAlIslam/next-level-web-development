//ternary operator
const age: number = 22;

const isOld: boolean = age > 50 ? true : false;

console.log(isOld); //false

//nullish coalescing operator
// null and undefined

const isAuthUser = null;
const userName = isAuthUser ?? "Guest";
console.log(userName); //Guest

type Human = {
  name: string;
  age: number;
  address: {
    city: "No City";
    country: "No Country";
    home?: "";
  };
};

const manush1: Human = {
  name: "Sakib",
  age: 22,
  address: {
    city: "No City",
    country: "No Country",
  },
};

const home = manush1?.address?.home ?? "No Home"; // default no home
console.log(home); //No Home