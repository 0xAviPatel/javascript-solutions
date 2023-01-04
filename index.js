// var checkTree = function (root) {
//     console.log("🚀 ~ root", root[1]+root[2]===root[0])
//   if (root[1] + root[2] == root[0]) {
//     return true;
//   } else {
//     return false;
//   }
// };

//-----------2---------

// function power(n) {
//   var sub_array = [];

//   for (let index = 0; index < n; index++) {
//     sub_array.push(2 ** index);
//   }

//   return sub_array;
// }

// console.log(power(5));

//-----------3---------

// function past(h, m, s) {
//   const exactTime = h * 3600000 + m * 60000 + s * 1000;
//   console.log("🚀 ~ exactTime", exactTime);

//   // return
// }

// past(0, 1, 1);

//----------- 4 : revert the data ---------

// function invert(array) {
//   // return array
//   var arr = [];
//   for (let i = 0; i < array.length; i++) {
//     arr.push(-array[i]);
//   }
//   return arr;
// }

// const a = invert([1, -2, 3, -4, 5]);

// console.log(a);

//----------- 5 functions sum ---------

function getSum(a, b) {
  if (a === b) return 1;
  else {
    let arr = [];
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr.reduce((a, b) => a + b);
  }
}

const a = getSum(-1, 5);

console.log(a, "---------->>>>>>>");

//sadly it's giving an error in codewars
