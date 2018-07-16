'use strict';

function get_union(collection_a, collection_b) {
  collection_b = collection_b.filter(value => {
    return !collection_a.includes(value);
  });
  return collection_a.concat(collection_b);
}

module.exports = get_union;

