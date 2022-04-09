const { divider } = require("../utils");
const { decimalToBinary, baseConverter } = require("./converter");

const decNumber = 2534326;
console.log('decNumber:', decNumber);
divider()

const res = decimalToBinary(decNumber);
console.log(res);
console.log('isTrue:', res === decNumber.toString(2));
divider();

const res2 = baseConverter(decNumber, 14);
console.log(res2);
console.log('isTrue2:', res2 === decNumber.toString(14));
divider();