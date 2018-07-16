'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter((cur) => collection_a.includes(cur));
}

module.exports = get_intersection;
