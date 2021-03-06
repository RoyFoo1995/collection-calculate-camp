'use strict';
function get_integer_interval_2(number_a, number_b) {
  let arry = generateArry(number_a, number_b);
  return arry.filter(((child) => child % 2 === 0));
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
  console.log(arry);
  return arry;
}

module.exports = get_integer_interval_2;
