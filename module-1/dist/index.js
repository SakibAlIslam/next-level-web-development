"use strict";
//Primitive types
//any...............
let myBatch; //type any (don't use it)
let myFirstDeclaration; //type annotation (recommended)
myFirstDeclaration = 'Hello from typescript'; //type annotation
//string....................
let courseName = 'Typescript new course'; //type annotation
let teamName = 'A team'; //type inference
courseName = 'Typescript new course: next level development';
//number....................
const rollNumber = 123456; //type annotation
const SeatNumber = 123456; //type inference
console.log('seat number', SeatNumber);
//boolean....................
const isCompleted = false; //type annotation
const isAdmin = false; //type inference
//null....................
const nullValue = null; //type annotation
const nullValue2 = null; //type inference
//undefined....................
const undefinedValue = undefined;
//symbol....................
const symbolValue = Symbol('symbol');
