"use strict";
//normal function
function add(a, b) {
    return a + b;
}
const addAsCallback = (a, b, c) => {
    return a + b + c;
};
const arr = [1, 4, 5];
const newArr = arr.map((item) => item * item);
const person = {
    name: 'Sakib',
    balance: 5000,
    addBalance(money) {
        return `My new Balance is ${this.balance + money}`;
    },
    deleteBalance(money) {
        this.balance -= money;
    }
};
