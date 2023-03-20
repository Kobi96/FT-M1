"use strict";

function BinarioADecimal(num) {
  /*   let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i] * 2 ** (num.length - 1 - i);
  }
  return sum; */

  /* - */

  /*  return Number.parseInt(num, 2);

   -

    let numDec = 0;
    let exp = 0;
    for (let i = num.length - 1; i >= 0; i--) {
      numDec += num[i] * Math.pow(2, exp);
      exp++;
    }
    return numDec;
   */
  let suma = 0;

  let number = num.split("").reverse();

  for (let i = 0; i < number.length; i++) {
    suma += number[i] * Math.pow(2, i);
  }

  return suma;
}

function DecimalABinario(num) {
  let array = [];

  while (num > 0) {
    array.unshift(num % 2);
    num = Math.floor(num / 2);
  }

  let result = array.join("");

  return result;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
