const _ = require('underscore');

function zipList(arr1, arr2) {
  const list = [];
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    list.push(arr1[i]);
    list.push(arr2[i]);
  }
  return list;
}

function zipListTheSimpleWay(arr1, arr2) {
  const list = _.zip(arr1, arr2);
  return _.flatten(list);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
