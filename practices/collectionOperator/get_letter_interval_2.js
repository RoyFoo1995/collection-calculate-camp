'use strict';

var charArry = "abcdefghijklmnopqrstuvwxyz";

function get_letter_interval_2(number_a, number_b) {
  let arry = generateArry(number_a, number_b);
  let stringArry = [];
  arry.forEach(value => {
    stringArry.push(covert(value));
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
  while (number > 1 ) {
    let i = number % 26;
    char = charArry.charAt(i) + char;
    number = parseInt(number / 26);
  }
  console.log(char);
  return char;
}

module.exports = get_letter_interval_2;

