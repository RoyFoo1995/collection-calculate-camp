'use strict';

function choose_even(collection) {
  return collection.filter((value) => {
    return value % 2 == 0;
  });
}

module.exports = choose_even;
