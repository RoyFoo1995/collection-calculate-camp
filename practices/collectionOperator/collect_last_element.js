'use strict';

function collect_last_element(collection) {
  return collection.filter((word, index, thisArg) => 
    index === thisArg.length - 1
  )[0];

}
module.exports = collect_last_element;
