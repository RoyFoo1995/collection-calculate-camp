'use strict';

function collect_all_even(collection) {

  var isEven = i => i % 2 == 0;
  return collection.filter(((word) => isEven(word)));
}

module.exports = collect_all_even;
