'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((value, index, arry) => value != arry[index + 1]);
}

module.exports = choose_no_repeat_number;
