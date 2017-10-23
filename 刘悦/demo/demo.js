const sorted = require('is-sorted');
const first = require('array-first');
const last = require('array-last');
const flatten = require('arr-flatten');
const dedupe = require('dedupe');
const range = require('array-range');
const diff = require('arr-diff');
const filledArray = require('filled-array');
const mapArray = require('map-array');
const inArray = require('in-array');
const remove = require('unordered-array-remove');
const swapArray = require('swap-array').default;
const mirrarray = require('mirrarray');

// // is-sorted
// console.log(sorted([1,2,3]));

// console.log(sorted([3,2,1]));

// console.log(sorted([3, 2, 1], function(a,b){return b - a }));


// // array-first
// console.log(first(['a','b','c','d','e','f']));

// console.log(first(['a','b','c','d','e','f'],1));

// console.log(first(['a','b','c','d','e','f'],3));

// //array-last
// console.log(last(['a','b','c','d','e','f']));

// console.log(last(['a','b','c','d','e','f'],1));

// console.log(last(['a','b','c','d','e','f'],3));

// //array-flatten
// console.log(flatten(['a',['b',['c']],'d',['e']]));

// //dedupe
// var a = [1,2,2,3];
// var b = dedupe(a);
// console.log(b);

// var aa = [{a:2},{a:1},{a:1},{a:1}];
// var bb = dedupe(aa);
// console.log(bb);

// var aaa = [{a:2,b:1},{a:1,b:2},{a:1,b:3},{a:1,b:4}];
// var bbb = dedupe(aaa,value => value.a);
// console.log(bbb);

// //array-range
// console.log(range(3));
// console.log(range(1,4));

// console.log(range(5).map(x => x * x));
// console.log(range(2,10).filter(x => x % 2 === 0));

// //array-diff
// var a = ['a','b','c','d'];
// var b = ['b','c'];
// console.log(diff(a,b));

// //array-filled
// console.log(filledArray('x',3));
// console.log(filledArray(0,3));

// console.log(filledArray(i => {
// 	return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
// }, 15));

// //array-map
// var obj = {
// 	name:'刘悦',
// 	sex:'女'
// };
// console.log(mapArray(obj,(key,value) => key + '：' + value));

// //in-array
// console.log(inArray(['a', 'b', 'c'], 'a'));
// console.log(inArray(null, 'a'));
// console.log(inArray(null));

// //remove
// var list=['a','b','c','d','e'];
// remove(list,2);
// console.log(list);

// //swap-array
// var array = ['a','b','c'];
// console.log(swapArray(array,0,2));

//mirrarray
var keymirror = mirrarray(['a','b','c']);
console.log(keymirror);