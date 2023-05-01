"use strict";
const names = ['Alice', 'Bob', 'Eve'];
const rollNumbers = [1, 2, 3, 4, 5];
rollNumbers[8] = 9;
const newNames = ['Alice', 'Bob', 'Eve', 77, true, null, undefined];
newNames[0] = 412;
const user = [412, 'Sakib']; //tuple example
user[1] = 'Rakib'; //strictly typed
names.map((name) => {
    name.charAt(0);
    console.log(name);
});
rollNumbers.map((rollNumber) => {
    rollNumber.toFixed(2);
    console.log(rollNumber);
});
