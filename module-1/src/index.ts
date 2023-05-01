//Primitive types

//any...............
let myBatch; //type any (don't use it)
let myFirstDeclaration: string; //type annotation (recommended)
myFirstDeclaration = 'Hello from typescript'; //type annotation

//string....................
let courseName: string = 'Typescript new course'; //type annotation
let teamName = 'A team'; //type inference
courseName = 'Typescript new course: next level development'; 

//number....................
const rollNumber: number = 123456; //type annotation
const SeatNumber = 123456; //type inference

//boolean....................
const isCompleted: boolean = false;     //type annotation
const isAdmin = false;                 //type inference

//null....................
const nullValue: null = null; //type annotation
const nullValue2 = null; //type inference

//undefined....................
const undefinedValue: undefined = undefined;

//symbol....................
const symbolValue: symbol = Symbol('symbol');
