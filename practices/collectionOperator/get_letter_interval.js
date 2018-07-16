'use strict';

var charArry = "abcdefghijklmnopqrstuvwxyz";

function get_letter_interval(number_a, number_b) {
  let arry = generateArry(number_a, number_b);
  let stringArry = [];
  arry.forEach(value => {
    stringArry.push(covert(value - 1));
  });
  return stringArry;
}

function generateArry(number_a, number_b) {
  let arry = [];
  if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      arry.push(i);
    }
  } else {
    for (var i = number_a; i <= number_b; i++) {
      arry.push(i);
    }
  }
  return arry;
}

function covert(number) {
  let char = "";
  let n = parseInt(number / 26);
  let m = number % 26;
  if (n === 0) {
    char = charArry.charAt(m);
  } else {
    char = charArry.charAt(n - 1) + charArry.charAt(m);
  }
  return char;
}

module.exports = get_letter_interval;
